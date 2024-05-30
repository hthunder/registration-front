import { useState } from "react";
import { useApiContext } from "../../../shared/api/apiContext.tsx";
import { mapFormDataToRegisterDto } from "../lib/mapFormDataToRegisterDto.ts";
import { ValidationError, validationRules } from "./validationRules.ts";
import { IRegistrationFormData } from "./types.ts";

const validateForm = (formData: IRegistrationFormData): ValidationError => {
  const newErrors: ValidationError = {};

  validationRules.some((rule) => {
    const error = rule(formData);

    if (error) {
      Object.assign(newErrors, error);
    }

    return error;
  });

  return newErrors;
};

export const useRegistrationForm = () => {
  const api = useApiContext();
  const [formData, setFormData] = useState<IRegistrationFormData>({
    firstName: "",
    lastName: "",
    birthday: "",
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    setErrors({});
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
      return;
    }

    try {
      if (!formData.avatar) {
        throw new Error("Avatar is required");
      }

      const registrationDto = await mapFormDataToRegisterDto({
        ...formData,
        avatar: formData.avatar,
      });
      const response = await api.register(registrationDto);

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      setSubmissionMessage("Registration successful!");
    } catch (error) {
      setSubmissionMessage("Registration failed: " + (error as Error).message);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    errors,
    submissionMessage,
  };
};
