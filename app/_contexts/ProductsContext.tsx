"use client";

import { createContext, ReactNode, use } from "react";
import { ListProduct } from "../_utils/types";

const ProductsContext = createContext<{ products: ListProduct[] } | undefined>(
  undefined,
);

interface ProductsProviderProps {
  children: ReactNode;
  products: ListProduct[];
}

function ProductsProvider({ children, products }: ProductsProviderProps) {
  return (
    <ProductsContext.Provider value={{ products }}>
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
