import { supabase } from "./supabase";

// -------- GET --------

export async function getBanners() {
  const { data, error } = await supabase
    .from("barfa-home-banners")
    .select("id, image_src, link, title");

  // For testing
  await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    throw new Error("Banners could not be loaded");
  }

  return data;
}

export async function getBrands() {
  const { data, error } = await supabase
    .from("barfa-popular-brands")
    .select("id, image_src, link, name");

  // For testing
  await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    throw new Error("Brands could not be loaded");
  }

  return data;
}

const homepageProductsFields =
  "id, title_fa, image_sources, price, discount_percent, colors";

export async function getDiscountedProducts() {
  const { data, error } = await supabase
    .from("barfa-products")
    .select(homepageProductsFields)
    .gt("discount_percent", 0)
    .gt("quantity", 0)
    .order("discount_percent", { ascending: false })
    .limit(10);

  // For testing
  await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    throw new Error("discounted products could not be loaded");
  }

  return data;
}

export async function getNewestProducts() {
  const { data, error } = await supabase
    .from("barfa-products")
    .select(homepageProductsFields)
    .gt("quantity", 0)
    .order("created_at", { ascending: false })
    .limit(10);

  // For testing
  await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    throw new Error("newest products could not be loaded");
  }

  return data;
}
