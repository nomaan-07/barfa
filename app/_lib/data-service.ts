import {
  SWIPER_PRODUCTS_LIMIT,
  TABLE_FIELDS,
  TABLES,
} from "../_utils/constants";
import { Banner, Brand, ListProduct, ProductsVariation } from "../_utils/types";
import { supabase } from "./supabase";

// -------- GET --------

export async function getBanners() {
  const { data, error } = await supabase
    .from(TABLES.BANNERS)
    .select(TABLE_FIELDS.BANNERS);

  // For testing
  await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    throw new Error("Banners could not be loaded");
  }

  return data as unknown as Banner[];
}

export async function getBrands() {
  const { data, error } = await supabase
    .from(TABLES.POPULAR_BRANDS)
    .select(TABLE_FIELDS.POPULAR_BRANDS);

  // For testing
  await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    throw new Error("Brands could not be loaded");
  }

  return data as unknown as Brand[];
}

interface getProductsOptions {
  limit?: number;
  quantity?: boolean;
  filter?: "discounted" | "all";
  variation: ProductsVariation;
}

export async function getProducts({ filter, variation }: getProductsOptions) {
  const isSwiper = variation === "swiper";

  const fields = isSwiper
    ? TABLE_FIELDS.SWIPER_PRODUCT
    : TABLE_FIELDS.LIST_PRODUCT;

  let query = supabase.from(TABLES.PRODUCTS).select(fields);

  switch (filter) {
    case "all":
      query = query.order("quantity", { ascending: false });
      break;
    case "discounted":
      query = query
        .gt("discount_percent", 0)
        .gt("quantity", 0)
        .order("discount_percent", { ascending: false });
      break;
  }

  if (isSwiper) query = query.gt("quantity", 0).limit(SWIPER_PRODUCTS_LIMIT);

  const { data, error } = await query;

  // For testing
  await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    throw new Error(`${filter} products could not be loaded`);
  }

  return data as unknown as ListProduct[];
}
