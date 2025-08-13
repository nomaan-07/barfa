"use client";

import { createContext, ReactNode, use, useMemo } from "react";
import { Colors, ListProduct, ProductBrand } from "../_utils/types";

interface ProductsContextValue {
  products: ListProduct[];
  minPrice: number;
  maxPrice: number;
  colors: Colors;
  brands: ProductBrand[];
}

const ProductsContext = createContext<ProductsContextValue | undefined>(
  undefined,
);

function convertColorsToUniqueArray(colors: Colors[]) {
  const uniqueColorMap = new Map();

  const flattenedColors = colors.flatMap((colorArray) => colorArray);

  flattenedColors.forEach((color) => {
    if (!uniqueColorMap.has(color.en)) {
      uniqueColorMap.set(color.en, color);
    }
  });

  return Array.from(uniqueColorMap.values());
}

interface ProductsProviderProps {
  children: ReactNode;
  products: ListProduct[];
}

function ProductsProvider({ children, products }: ProductsProviderProps) {
  const value = useMemo(() => {
    const prices = products.map((p) => p.discounted_price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const brands = [
      ...new Map(products.map((p) => [p.brand.en, p.brand])).values(),
    ];
    const colors = convertColorsToUniqueArray(products.map((p) => p.colors));

    return { products, brands, minPrice, maxPrice, colors };
  }, [products]);
  return (
    <ProductsContext.Provider value={value}>
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
