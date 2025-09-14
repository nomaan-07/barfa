import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "./app/_lib/supabase";
import { TABLES } from "./app/_utils/constants";

const protectRoutes = ["/account", "/checkout"];
const authRoutes = ["/login", "/signup"];

export default async function middleware(req: NextRequest) {
  const sessionId = (await cookies()).get("session")?.value;
  const path = req.nextUrl.pathname;
  const isAuthRoute = authRoutes.includes(path);
  const isProtectedRoute = protectRoutes.some((route) =>
    path.startsWith(route),
  );

  let isAuthenticated = false;
  if (sessionId) {
    const { data: session } = await supabase
      .from(TABLES.SESSIONS)
      .select("expires_at")
      .eq("id", sessionId)
      .single();

    if (session && new Date(session.expires_at) > new Date()) {
      isAuthenticated = true;
    }
  }
  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL(`/login?backTo=${path}`, req.nextUrl));
  }

  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/account/:path*", "/checkout", "/login", "/signup"],
};
