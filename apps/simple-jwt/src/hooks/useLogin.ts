import { authService } from "@/services/AuthService";

import Cookies from "js-cookie";

export function useLogin() {
  const login = async (username: string, password: string) => {
    const data = await authService.login(username, password);

    if (data) {
      localStorage.setItem("currentUser", JSON.stringify(data));
    }

    return data.user;
  };

  return { login };
}
