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

  const sessionId = (await cookies()).get("session")?.value;

  if (isProtectedRoute && !sessionId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isAuthRoute && sessionId) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/account/:path*", "/checkout", "/login", "/signup"],
};
