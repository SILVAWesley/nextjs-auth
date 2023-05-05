import { useLogin } from "@/hooks/useLogin";
import { useRouter } from "next/router";
import { FormEventHandler, useCallback, useRef, useState } from "react";

export default function LoginPage() {
  const emailField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);

  const [error, setError] = useState(false);

  const router = useRouter();

  const { login } = useLogin();

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const email = emailField.current?.value;
      const password = passwordField.current?.value;

      console.log(email, password, "data");

      if (email && password) {
        try {
          const user = await login(email, password);
          console.log(user, "user");

          if (user) {
            router.push("/hello");
          }
        } catch (err) {
          setError(true);
        }
      }
    },
    [login, router]
  );

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <label>
          Email:
          <input type="text" ref={emailField} />
        </label>

        <label>
          Password: <input type="password" ref={passwordField} />
        </label>

        <button type="submit" style={{ width: "256px" }}>
          Entrar
        </button>

        <p style={{ color: "#aa8877" }}>
          Erro ao realizar login, tente novamente!
        </p>
      </form>
    </div>
  );
}
