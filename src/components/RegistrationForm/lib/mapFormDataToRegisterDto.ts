import { IRegistrationDto } from "../../../shared/api/apiClient.ts";
import { convertFileToBase64 } from "../../../shared/lib/convertFileToBase64.ts";
import { IRegistrationFormData } from "../model/types.ts";

export const mapFormDataToRegisterDto = async (
  formData: Required<IRegistrationFormData>,
): Promise<IRegistrationDto> => {
  const base64Avatar = await convertFileToBase64(formData.avatar);

  return {
    avatar: base64Avatar,
    first_name: formData.firstName,
    last_name: formData.lastName,
    birthday: formData.birthday,
    username: formData.username,
    email: formData.email,
    password: formData.password,
  };
};
