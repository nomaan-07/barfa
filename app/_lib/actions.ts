"use server";

import argon2 from "argon2";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
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

  const { data, error } = await supabase
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

  if (error) throw new Error(error.message);

  const cookieStore = await cookies();
  cookieStore.set({
    name: "session",
    value: data.id,
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/");
}

// ----- LOGIN -----

export async function loginUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { data, error } = await supabase
    .from(TABLES.USERS)
    .select("id, password")
    .eq("email", email)
    .single();

  if (!data || error) throw new Error("Invalid credentials");

  const valid = await argon2.verify(data.password, password);
  if (!valid) throw new Error("Invalid credentials");

  const cookieStore = await cookies();
  cookieStore.set({
    name: "session",
    value: data.id,
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/");
}

// ----- LOGOUT -----

export async function logoutUser() {
  const cookieStore = await cookies();
  cookieStore.delete({
    name: "session",
    path: "/",
  });
}

// ----- GET USER -----

export async function GetUserFromCookie() {
  const session = (await cookies()).get("session")?.value;

  if (!session) return false;

  const { data } = await supabase
    .from(TABLES.USERS)
    .select("id")
    .eq("id", session)
    .single();

  return !!data;
}
