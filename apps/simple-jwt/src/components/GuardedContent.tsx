import { useRouter } from "next/router";
import { useEffect } from "react";

export interface GuardedContentProps {
  children: React.ReactNode;
}

export function GuardedContent({ children }: GuardedContentProps) {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("currentUser")) {
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
}
