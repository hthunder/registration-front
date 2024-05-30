import { type IRegistrationDto } from "../../../shared/api/";
import { convertFileToBase64 } from "../../../shared/lib/";
import { IRegistrationFormData } from "../model/types.ts";

export const mapFormDataToRegisterDto = async (
  formData: Required<IRegistrationFormData>,
): Promise<IRegistrationDto> => {
  const base64Avatar = await convertFileToBase64(formData.avatar);

  return {
    avatar: base64Avatar,
    firstName: formData.firstName,
    lastName: formData.lastName,
    birthday: formData.birthday,
    username: formData.username,
    email: formData.email,
    password: formData.password,
  };
};
