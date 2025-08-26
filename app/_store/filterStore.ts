import { create } from "zustand";
import { Colors, ProductBrand } from "../_utils/types";

interface FilterStoreState {
  brands: ProductBrand[];
  colors: Colors;
  minPrice: number;
  maxPrice: number;
}

export const useFilterStore = create<FilterStoreState>((set) => ({
  brands: [],
  colors: [],
  minPrice: 0,
  maxPrice: 0,

  setInitialFilters: (filters: FilterStoreState) => {
    set({
      brands: filters.brands,
      colors: filters.colors,
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
    });
  },
}));
