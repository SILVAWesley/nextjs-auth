import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useLogout } from "@/hooks/useLogout";
import { useRouter } from "next/router";

export default function HelloPage() {
  const { logout } = useLogout();

  const user = useCurrentUser();

  const router = useRouter();

  return (
    <>
      <div>
        <h1>Hello, {user?.name}</h1>
        <button
          onClick={() => {
            logout();
            router.push("/login");
          }}
        >
          Sair
        </button>
      </div>
    </>
  );
}
