"use server";

import { TABLE_FIELDS, TABLES } from "@/app/_utils/constants";
import { convertToPersian } from "@/app/_utils/helper";
import argon2 from "argon2";
import { cookies } from "next/headers";
import { supabase } from "../supabase";

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
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.trim(),
      phone: convertToPersian(phone, false),
      password: hashedPassword,
    })
    .select()
    .single();

  if (userError) {
    if (userError.details.includes("phone")) {
      return { error: "این شماره تلفن قبلاً استفاده شده است" };
    }
    if (userError.details.includes("email")) {
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
    const { error } = await supabase
      .from(TABLES.SESSIONS)
      .delete()
      .eq("id", sessionId);

    if (error) {
      throw new Error(error.message);
    }
  }

  cookieStore.delete("session");
}

// ----- GET USER -----

export async function getUserFromCookie() {
  const sessionId = (await cookies()).get("session")?.value;

  if (!sessionId) return;

  const { data: session } = await supabase
    .from(TABLES.SESSIONS)
    .select("user_id, expires_at")
    .eq("id", sessionId)
    .single();

  if (!session || new Date(session.expires_at) < new Date()) return;

  const { data: user } = await supabase
    .from(TABLES.USERS)
    .select(TABLE_FIELDS.USER)
    .eq("id", session.user_id)
    .single();

  return user || undefined;
}

// ----- UPDATE USER -----

interface UpdateUserOptions {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  newPassword?: string;
}

export async function updateUser(updates: UpdateUserOptions) {
  const currentUser = await getUserFromCookie();

  if (!currentUser) return { error: "کاربری یافت نشد" };

  const toUpdate: Record<string, string> = {};

  if (updates.firstName !== currentUser.first_name)
    toUpdate.first_name = updates.firstName;

  if (updates.lastName !== currentUser.last_name)
    toUpdate.last_name = updates.lastName;

  if (updates.email !== currentUser.email) toUpdate.email = updates.email;

  if (updates.phone !== currentUser.phone) toUpdate.phone = updates.phone;

  if (updates.newPassword)
    toUpdate.password = await argon2.hash(updates.newPassword);

  const { data: updatedUser, error } = await supabase
    .from(TABLES.USERS)
    .update(toUpdate)
    .eq("id", currentUser.id)
    .select()
    .single();

  if (error) {
    if (error.details.includes("phone")) {
      return { error: "این شماره تلفن قبلاً استفاده شده است" };
    }
    if (error.details.includes("email")) {
      return { error: "این ایمیل قبلاً استفاده شده است" };
    }
    return {
      error: "مشکلی در بروز رسانی اطلاعات پیش آمد، لطفاً دوباره تلاش کنید",
    };
  }

  return {
    success: true,
    updatedUser: {
      first_name: updatedUser.first_name,
      last_name: updatedUser.last_name,
      email: updatedUser.email,
      phone: updatedUser.phone,
    },
  };
}
