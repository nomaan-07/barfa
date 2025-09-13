import FilterAndSort from "@/app/_components/Common/FilterAndSort";
import FilterSidebar from "@/app/_components/Common/FilterAndSort/Filter/FilterSidebar";
import PageBreadCrumbs from "@/app/_components/Common/PageBreadCrumbs";
import ProductsList from "@/app/_components/Common/ProductsList";
import ProductsListFallback from "@/app/_components/Common/ProductsList/components/ProductsListFallback";
import ScrollToTop from "@/app/_components/Common/ScrollToTop";
import { getProductsFilters } from "@/app/_lib/data-services";
import {
  categoryParamsValidation,
  getCategoryBySlug,
  normalizeParam,
} from "@/app/_utils/helper";
import { CategorySearchParams } from "@/app/_utils/types";
import { Suspense } from "react";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: CategorySearchParams;
}

async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug: category } = await params;
  const searchParamsObj = await searchParams;

  categoryParamsValidation(searchParamsObj);

  const { sort, discounted, available, minPrice, maxPrice, brand, color } =
    searchParamsObj;

  const brands = normalizeParam(brand);
  const colors = normalizeParam(color);

  const { productsBrands, productsColors, priceRange } =
    await getProductsFilters({ category });

  const currentBrandArr = productsBrands.filter((obj) =>
    brands?.includes(obj.en),
  );

  const currentCategory = getCategoryBySlug(category);

  return (
    <div className="mx-auto mt-4 max-w-7xl space-y-8 px-6">
      <ScrollToTop />
      <PageBreadCrumbs
        page="category"
        category={currentCategory}
        brand={currentBrandArr}
      />
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
              category,
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

export default CategoryPage;
