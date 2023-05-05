import { GuardedContent } from "@/components/GuardedContent";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useLogout } from "@/hooks/useLogout";
import { useRouter } from "next/router";

export default function HelloPage() {
  const { logout } = useLogout();

  const user = useCurrentUser();

  const router = useRouter();

  return (
    <GuardedContent>
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
    </GuardedContent>
  );
}
