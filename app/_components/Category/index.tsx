import PageBreadCrumbs from "@/app/_components/Common/PageBreadCrumbs";
import { ProductsProvider } from "@/app/_contexts/ProductsContext";
import { getProducts } from "@/app/_lib/data-service";
import { categoryParamsValidation } from "@/app/_utils/helper";
import {
  CategoryParams,
  CategorySearchParams,
  ListProduct,
} from "@/app/_utils/types";
import FilterAndSort from "../Common/FilterAndSort";
import FilterSidebar from "../Common/FilterAndSort/Filter/FilterSidebar";
import ProductsList from "../Common/ProductsList";

interface CategoryProps {
  params: CategoryParams;
  searchParams: CategorySearchParams;
}

async function Category({ params, searchParams }: CategoryProps) {
  const { slug } = await params;
  const searchParamsObj = await searchParams;

  categoryParamsValidation(slug, searchParamsObj);

  const { sort, discounted } = searchParamsObj;

  const products: ListProduct[] = await getProducts({
    category: slug,
    variation: "list",
    sort,
    discounted,
  });

  return (
    <ProductsProvider products={products}>
      <div className="mx-auto mt-4 max-w-7xl space-y-8 px-6">
        <PageBreadCrumbs />
        <div className="flex gap-4">
          <FilterSidebar />
          <div className="space-y-4">
            <FilterAndSort />
            <ProductsList products={products} />
          </div>
        </div>
      </div>
    </ProductsProvider>
  );
}

export default Category;
