import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useLogout } from "@/hooks/useLogout";
import { GetServerSideProps } from "next";
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies.currentUser
    ? JSON.parse(ctx.req.cookies.currentUser).token
    : undefined;

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
