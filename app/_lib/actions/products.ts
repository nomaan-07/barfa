"use server";

import {
  SEARCH_PANEL_PRODUCTS_LIMIT,
  TABLE_FIELDS,
  TABLES,
} from "@/app/_utils/constants";
import { SearchPanelProductsType } from "@/app/_utils/types";
import { supabase } from "../supabase";

export async function getSearchedProducts(query: string) {
  let supabaseQuery = supabase
    .from(TABLES.PRODUCTS)
    .select(TABLE_FIELDS.SEARCH_PANEL_PRODUCTS);

  const keywords = query.split(" ").filter(Boolean);

  if (keywords.length === 0) return [];

  const filters: string[] = [];

  keywords.forEach((word) => {
    filters.push(
      `category->>en.ilike.%${word}%,category->>fa.ilike.%${word}%,brand->>en.ilike.%${word}%,brand->>fa.ilike.%${word}%,title_en.ilike.%${word}%,title_fa.ilike.%${word}%`,
    );
  });

  const orClause = filters.join(",");

  supabaseQuery = supabaseQuery.or(orClause).limit(SEARCH_PANEL_PRODUCTS_LIMIT);

  const { data, error } = await supabaseQuery;

  if (error) {
    console.error(error);
    throw new Error(`searched products could not be loaded`);
  }

  return data as unknown as SearchPanelProductsType;
}
