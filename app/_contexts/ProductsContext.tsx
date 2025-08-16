"use client";

import { createContext, ReactNode, use } from "react";
import { Colors, ListProduct, ProductBrand } from "../_utils/types";

interface ProductsContextValue {
  products: ListProduct[];
  colors: Colors;
  brands: ProductBrand[];
  minPrice: number;
  maxPrice: number;
}

const ProductsContext = createContext<ProductsContextValue | undefined>(
  undefined,
);

interface ProductsProviderProps {
  children: ReactNode;
  products: ListProduct[];
  brands: ProductBrand[];
  colors: Colors;
  prices: { min: number; max: number };
}

function ProductsProvider({
  children,
  products,
  brands,
  colors,
  prices,
}: ProductsProviderProps) {
  const { min: minPrice, max: maxPrice } = prices;
  return (
    <ProductsContext.Provider
      value={{ products, brands, minPrice, maxPrice, colors }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = use(ProductsContext);

  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return context;
}

export { ProductsProvider, useProducts };
