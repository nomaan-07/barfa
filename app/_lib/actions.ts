"use server";

import { getSearchPanelProducts } from "./data-services";

export async function fetchSearchedProducts(query: string) {
  return await getSearchPanelProducts(query);
}
