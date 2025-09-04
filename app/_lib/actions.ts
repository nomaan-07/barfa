"use server";

import argon2 from "argon2";
import { cookies } from "next/headers";
import { TABLES } from "../_utils/constants";
import { getSearchPanelProducts } from "./data-services";
import { supabase } from "./supabase";

export async function fetchSearchedProducts(query: string) {
  return await getSearchPanelProducts(query);
}

// ----- SIGNUP -----

export async function signupUser(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const password = formData.get("password") as string;

  const hashedPassword = await argon2.hash(password);

  const { data: user, error: userError } = await supabase
    .from(TABLES.USERS)
    .insert({
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      password: hashedPassword,
    })
    .select()
    .single();

  if (userError) {
    if (userError.code === "23505") {
      return { error: "این ایمیل قبلاً استفاده شده است" };
    }
    return { error: "مشکلی در ثبت‌نام پیش آمد، لطفاً دوباره تلاش کنید" };
  }

  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);

  const { data: session, error: sessionError } = await supabase
    .from(TABLES.SESSIONS)
    .insert({
      user_id: user.id,
      expires_at: expiresAt.toISOString(),
    })
    .select("id")
    .single();

  if (sessionError) {
    await supabase.from(TABLES.USERS).delete().eq("id", user.id);
    return { error: "مشکلی در ثبت‌نام پیش آمد، لطفاً دوباره تلاش کنید" };
  }

  const cookieStore = await cookies();
  cookieStore.set({
    name: "session",
    value: session.id,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires: expiresAt,
  });

  return { success: true };
}

// ----- LOGIN -----

export async function loginUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { data: user, error: userError } = await supabase
    .from(TABLES.USERS)
    .select("id, password")
    .eq("email", email)
    .single();

  if (!user || userError) {
    return { error: "ایمیل وارد شده وجود ندارد" };
  }

  const valid = await argon2.verify(user.password, password);
  if (!valid) {
    return { error: "رمز عبور نادرست است" };
  }

  await supabase.from(TABLES.SESSIONS).delete().eq("user_id", user.id);

  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);

  const { data: session, error: sessionError } = await supabase
    .from(TABLES.SESSIONS)
    .insert({
      user_id: user.id,
      expires_at: expiresAt.toISOString(),
    })
    .select("id")
    .single();

  if (sessionError) {
    return { error: "مشکلی در ورود پیش آمد، لطفاً دوباره تلاش کنید" };
  }

  const cookieStore = await cookies();
  cookieStore.set({
    name: "session",
    value: session.id,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires: expiresAt,
  });

  return { success: true };
}

// ----- LOGOUT -----

export async function logoutUser() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("session")?.value;

  if (sessionId) {
    await supabase.from(TABLES.SESSIONS).delete().eq("id", sessionId);
  }

  cookieStore.delete("session");
}

// ----- GET USER -----

export async function getUserFromCookie() {
  const sessionId = (await cookies()).get("session")?.value;

  if (!sessionId) return null;

  const { data: session } = await supabase
    .from(TABLES.SESSIONS)
    .select("user_id, expires_at")
    .eq("id", sessionId)
    .single();

  if (!session || new Date(session.expires_at) < new Date()) return null;

  const { data: user } = await supabase
    .from(TABLES.USERS)
    .select("id, first_name, last_name, email")
    .eq("id", session.user_id)
    .single();

  return user || null;
}
