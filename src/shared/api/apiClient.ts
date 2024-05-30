export interface IRegistrationDto {
  first_name: string;
  last_name: string;
  birthday: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
}

export class ApiClient {
  constructor(private baseUrl: string) {}

  register(data: IRegistrationDto) {
    return fetch(`${this.baseUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}
