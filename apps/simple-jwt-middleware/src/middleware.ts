// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { IUser } from "./data/users";

const protectedRoutes = ["/hello"];
const publicRoutes = ["/"];
const authRoutes = ["/login"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const userStr = request.cookies.get("currentUser")?.value;
  const user: IUser | undefined = userStr
    ? JSON.parse(userStr).user
    : undefined;

  if (protectedRoutes.includes(request.nextUrl.pathname) && !user) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    request.cookies.delete("currentUser");

    return response;
  }

  if (authRoutes.includes(request.nextUrl.pathname) && user) {
    return NextResponse.redirect(new URL("/hello", request.url));
  }
}
