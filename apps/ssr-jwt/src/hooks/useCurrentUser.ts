import { IUser } from "@/data/users";
import { useEffect, useState } from "react";

import Cookies from "js-cookie";

export const useCurrentUser = () => {
  const [user, setUser] = useState<IUser | undefined>();

  useEffect(() => {
    const currentUser = Cookies.get("currentUser");

    if (currentUser) {
      setUser(JSON.parse(currentUser).user);
    }
  }, []);

  return user;
};
