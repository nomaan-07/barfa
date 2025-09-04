import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const protectRoutes = ["/account", "/checkout"];
const authRoutes = ["/login", "/signup"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectRoutes.some((route) =>
    path.startsWith(route),
  );
  const isAuthRoute = authRoutes.includes(path);

  const session = (await cookies()).get("session")?.value;

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/account/:path*", "/checkout", "/login", "/signup"],
};
