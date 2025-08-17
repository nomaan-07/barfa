import { TABLE_FIELDS, TABLES } from "@/app/_utils/constants";
import { Banner } from "@/app/_utils/types";
import { supabase } from "../supabase";

// -------- GET --------

export async function getBanners() {
  const { data, error } = await supabase
    .from(TABLES.BANNERS)
    .select(TABLE_FIELDS.BANNERS);

  // For testing
  // await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    throw new Error("Banners could not be loaded");
  }

  return data as unknown as Banner[];
}
