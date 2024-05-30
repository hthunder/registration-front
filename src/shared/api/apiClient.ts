import { IRegistrationDto } from "./types.ts";

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
