"use client";

import { useProductsStore } from "@/app/_store/productStore";
import { ProductType } from "@/app/_utils/types";
import { useRef } from "react";
import ProductWrapper from "./ProductWrapper";

interface ProductInitializerProps {
  product: ProductType;
}

function ProductInitializer({ product }: ProductInitializerProps) {
  const isInitialized = useRef(false);

  if (!isInitialized.current) {
    const setInitialProduct = useProductsStore.getState().setInitialProduct;
    setInitialProduct(product);
    isInitialized.current = true;
  }

  return <ProductWrapper />;
}

export default ProductInitializer;
