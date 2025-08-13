"use client";

import { useProducts } from "@/app/_contexts/ProductsContext";
import FilterDrawer from "./FilterDrawer";

function Filter() {
  const { products, brands, colors, maxPrice, minPrice } = useProducts();

  console.log(brands);
  return (
    <div>
      <FilterDrawer />
    </div>
  );
}

export default Filter;
