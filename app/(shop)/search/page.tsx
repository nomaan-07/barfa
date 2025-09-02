import FilterAndSort from "@/app/_components/Common/FilterAndSort";
import FilterSidebar from "@/app/_components/Common/FilterAndSort/Filter/FilterSidebar";
import NotFoundPage from "@/app/_components/Common/NotFoundPage";
import ProductsList from "@/app/_components/Common/ProductsList";
import ProductsListFallback from "@/app/_components/Common/ProductsList/components/ProductsListFallback";
import { getProductsFilters } from "@/app/_lib/data-services";
import { normalizeParam } from "@/app/_utils/helper";
import { SearchPageSearchParams } from "@/app/_utils/types";
import { Suspense } from "react";

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

  if (!query)
    return (
      <NotFoundPage description="از نوار جستجو برای پیدا کردن محصول استفاده کنید" />
    );

  const decodedQuery = decodeURIComponent(query);
  const brands = normalizeParam(brand);
  const colors = normalizeParam(color);
  const category = "all";

  const { productsBrands, productsColors, priceRange } =
    await getProductsFilters({ category });

  return (
    <div className="mx-auto mt-4 max-w-7xl space-y-8 px-6">
      <div className="flex gap-2 text-lg font-semibold sm:text-2xl">
        <span>جستجو:</span>
        <p className="text-default-400">{decodedQuery}</p>
      </div>
      <div className="flex gap-4">
        <FilterSidebar
          brands={productsBrands}
          colors={productsColors}
          prices={priceRange}
        />
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
  );
}

export default SearchPage;
