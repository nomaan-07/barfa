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
  await new Promise((res) => setTimeout(res, 2000));
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
}
