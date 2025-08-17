import { TABLE_FIELDS, TABLES } from "@/app/_utils/constants";
import { PopularBrand } from "@/app/_utils/types";
import { supabase } from "../supabase";

// -------- GET --------

export async function getBrands() {
  const { data, error } = await supabase
    .from(TABLES.POPULAR_BRANDS)
    .select(TABLE_FIELDS.POPULAR_BRANDS);

  // For testing
  // await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    throw new Error("Brands could not be loaded");
  }

  return data as unknown as PopularBrand[];
}
