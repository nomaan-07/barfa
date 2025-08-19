import { Suspense } from "react";
import FilterAndSort from "../_components/Common/FilterAndSort";
import FilterSidebar from "../_components/Common/FilterAndSort/Filter/FilterSidebar";
import ProductsList from "../_components/Common/ProductsList";
import ProductsListFallback from "../_components/Common/ProductsList/components/ProductsListFallback";
import { FiltersProvider } from "../_contexts/FiltersContext";
import { getProductsFilters } from "../_lib/data-services";
import { normalizeParam } from "../_utils/helper";
import { SearchPageSearchParams } from "../_utils/types";

interface SearchPageProps {
  searchParams: SearchPageSearchParams;
}

async function SearchPage({ searchParams }: SearchPageProps) {
  const searchParamsObj = await searchParams;
  const {
    query,
    sort,
    discounted,
    available,
    minPrice,
    maxPrice,
    brand,
    color,
  } = searchParamsObj;

  const decodedQuery = decodeURIComponent(query);
  const brands = normalizeParam(brand);
  const colors = normalizeParam(color);
  const category = "all";

  const { productsBrands, productsColors, priceRange } =
    await getProductsFilters({ category });

  return (
    <FiltersProvider
      brands={productsBrands}
      colors={productsColors}
      prices={priceRange}
    >
      <div className="mx-auto mt-4 max-w-7xl space-y-8 px-6">
        <div className="flex gap-2 text-lg font-semibold sm:text-2xl">
          <span>جستجو:</span>
          <p className="text-default-400">{decodedQuery}</p>
        </div>
        <div className="flex gap-4">
          <FilterSidebar />
          <div className="w-full space-y-4">
            <FilterAndSort />
            <Suspense
              key={JSON.stringify({
                decodedQuery,
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
                category={category}
                query={decodedQuery}
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

export default SearchPage;
