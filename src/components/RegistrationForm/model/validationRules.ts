import { IRegistrationFormData } from "./types.ts";

export type ValidationError = { [key: string]: string };

const validateFirstName = (
  formData: IRegistrationFormData,
): ValidationError | null => {
  if (!formData.firstName) {
    return { firstName: "First name is required" };
  }
  return null;
};

const validateLastName = (
  formData: IRegistrationFormData,
): ValidationError | null => {
  if (!formData.lastName) {
    return { lastName: "Last name is required" };
  }
  return null;
};

const validateBirthday = (
  formData: IRegistrationFormData,
): ValidationError | null => {
  if (!formData.birthday) {
    return { birthday: "Birthday is required" };
  }
  return null;
};

const validateUsername = (
  formData: IRegistrationFormData,
): ValidationError | null => {
  if (!formData.username) {
    return { username: "Username is required" };
  }
  return null;
};

const validateEmail = (
  formData: IRegistrationFormData,
): ValidationError | null => {
  if (!formData.email) {
    return { email: "Email is required" };
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    return { email: "Email is invalid" };
  }
  return null;
};

const validatePassword = (
  formData: IRegistrationFormData,
): ValidationError | null => {
  if (!formData.password) {
    return { password: "Password is required" };
  } else if (formData.password.length < 8) {
    return { password: "Password must be at least 8 characters long" };
  } else if (
    !/[A-Z]/.test(formData.password) ||
    !/[a-z]/.test(formData.password) ||
    !/[0-9]/.test(formData.password)
  ) {
    return {
      password: "Password must contain upper, lower case letters and a number",
    };
  }
  return null;
};

const validateAvatar = (
  formData: IRegistrationFormData,
): ValidationError | null => {
  if (!formData.avatar) {
    return { avatar: "Avatar is required" };
  } else if (!formData.avatar.type.startsWith("image/")) {
    return { avatar: "Avatar must be an image file" };
  }
  return null;
};

export const validationRules = [
  validateFirstName,
  validateLastName,
  validateBirthday,
  validateUsername,
  validateEmail,
  validatePassword,
  validateAvatar,
];
