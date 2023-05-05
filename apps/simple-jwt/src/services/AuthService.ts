import { IUser } from "@/data/users";
import axios, { AxiosInstance } from "axios";

class AuthService {
  api: AxiosInstance;

  public constructor() {
    this.api = axios.create();
  }

  async login(username: string, password: string) {
    try {
      const result = await this.api.post<{ user: IUser; token: string }>(
        "/api/login",
        { username, password }
      );

      console.log(result, "reuslt");

      if (result.status === 200) {
        return result.data;
      }

      throw new Error();
    } catch (err) {
      throw new Error();
    }
  }
}

export const authService = new AuthService();
