import Cookies from "js-cookie";

export const useLogout = () => {
  const logout = () => {
    localStorage.removeItem("currentUser");
  };

  return { logout };
};
