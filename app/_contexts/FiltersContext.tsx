"use client";

import { createContext, ReactNode, use } from "react";
import { Colors, ProductBrand } from "../_utils/types";

interface FiltersContextValue {
  colors: Colors;
  brands: ProductBrand[];
  minPrice: number;
  maxPrice: number;
}

const FiltersContext = createContext<FiltersContextValue | undefined>(
  undefined,
);

interface FiltersProviderProps {
  children: ReactNode;
  brands: ProductBrand[];
  colors: Colors;
  prices: { min: number; max: number };
}

function FiltersProvider({
  children,
  brands,
  colors,
  prices,
}: FiltersProviderProps) {
  const { min: minPrice, max: maxPrice } = prices;
  return (
    <FiltersContext.Provider value={{ brands, minPrice, maxPrice, colors }}>
      {children}
    </FiltersContext.Provider>
  );
}

function useFilters() {
  const context = use(FiltersContext);

  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }

  return context;
}

export { FiltersProvider, useFilters };
