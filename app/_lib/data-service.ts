import { supabase } from "./supabase";

// -------- GET --------

export async function getBanners() {
  const { data, error } = await supabase
    .from("barfa-home-banners")
    .select("id, image_src, link, title");

  // For testing
  await new Promise((res) => setTimeout(res, 10000));

  if (error) {
    console.error(error);
    throw new Error("Banners could not be loaded");
  }

  return data;
}
