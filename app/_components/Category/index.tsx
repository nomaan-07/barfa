import PageBreadCrumbs from "@/app/_components/Common/PageBreadCrumbs";

import { FiltersProvider } from "@/app/_contexts/FiltersContext";
import {
  getMinAndMaxPrice,
  getProductsBrands,
  getProductsColors,
} from "@/app/_lib/data-services";
import { categoryParamsValidation, normalizeParam } from "@/app/_utils/helper";
import { CategoryParams, CategorySearchParams } from "@/app/_utils/types";
import { Suspense } from "react";
import FilterAndSort from "../Common/FilterAndSort";
import FilterSidebar from "../Common/FilterAndSort/Filter/FilterSidebar";
import ProductsList from "../Common/ProductsList";
import ProductsListFallback from "../Common/ProductsList/components/ProductsListFallback";

interface CategoryProps {
  params: CategoryParams;
  searchParams: CategorySearchParams;
}

async function Category({ params, searchParams }: CategoryProps) {
  const { slug } = await params;
  const searchParamsObj = await searchParams;

  categoryParamsValidation(slug, searchParamsObj);

  const { sort, discounted, available, minPrice, maxPrice, brand, color } =
    searchParamsObj;

  const brands = normalizeParam(brand);
  const colors = normalizeParam(color);

  const productsBrands = await getProductsBrands({ category: slug });
  const productColors = await getProductsColors({ category: slug });
  const prices = await getMinAndMaxPrice({ category: slug });

  return (
    <FiltersProvider
      brands={productsBrands}
      colors={productColors}
      prices={prices}
    >
      <div className="mx-auto mt-4 max-w-7xl space-y-8 px-6">
        <PageBreadCrumbs />
        <div className="flex gap-4">
          <FilterSidebar />
          <div className="w-full space-y-4">
            <FilterAndSort />
            <Suspense
              key={JSON.stringify({
                slug,
                sort,
                discounted,
                available,
                minPrice,
                maxPrice,
                brands,
                colors,
              })}
              fallback={<ProductsListFallback />}
            >
              <ProductsList
                category={slug}
                sort={sort}
                discounted={discounted}
                available={available}
                minPrice={minPrice}
                maxPrice={maxPrice}
                brands={brands}
                colors={colors}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </FiltersProvider>
  );
}

export default Category;
