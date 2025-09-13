import { TABLE_FIELDS, TABLES } from "@/app/_utils/constants";
import { Banner } from "@/app/_utils/types";
import { supabase } from "../supabase";

export async function getBanners() {
  const { data, error } = await supabase
    .from(TABLES.BANNERS)
    .select(TABLE_FIELDS.BANNERS);

  if (error) {
    console.error(error);
    throw new Error("Banners could not be loaded");
  }

  return data as unknown as Banner[];
}
