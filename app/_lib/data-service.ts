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
  category: string;
  variation: ProductsVariation;
  discounted?: string;
  sort?: string;
}

export async function getProducts({
  variation,
  category,
  discounted,
  sort,
}: getProductsOptions) {
  const isSwiper = variation === "swiper";

  const fields = isSwiper
    ? TABLE_FIELDS.SWIPER_PRODUCT
    : TABLE_FIELDS.LIST_PRODUCT;

  let query = supabase.from(TABLES.PRODUCTS).select(fields);

  if (category !== "all") {
    query = query.eq("category->>en", category);
  }

  // Filter
  if (discounted) query = query.gt("discount_percent", 0).gt("quantity", 0);

  // Sort
  switch (sort) {
    case "newest":
      query.order("created_at", { ascending: false });
      break;
    default:
      query.order("quantity", { ascending: false });
      break;
  }

  if (isSwiper) query = query.gt("quantity", 0).limit(SWIPER_PRODUCTS_LIMIT);

  const { data, error } = await query;

  // For testing
  await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    throw new Error(`${category} products could not be loaded`);
  }

  return data as unknown as ListProduct[];
}
