import { TABLES } from "@/app/_utils/constants";
import { notFound } from "next/navigation";
import { cache } from "react";
import { supabase } from "../supabase";

async function _getProduct(id: number) {
  const { data, error } = await supabase
    .from(TABLES.PRODUCTS)
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error(error);
    return notFound();
  }

  return data;
}

export const getProduct = cache(_getProduct);
