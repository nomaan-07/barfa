import { create } from "zustand";
import { Colors, ProductBrand } from "../_utils/types";

interface FilterStoreState {
  brands: ProductBrand[];
  colors: Colors;
  minPrice: number;
  maxPrice: number;
}

interface Actions {
  setInitialFilters: (filters: FilterStoreState) => void;
}

export const useFilterStore = create<FilterStoreState & Actions>((set) => ({
  brands: [],
  colors: [],
  minPrice: 0,
  maxPrice: 0,

  setInitialFilters: (filters) => {
    set({
      brands: filters.brands,
      colors: filters.colors,
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
    });
  },
}));
