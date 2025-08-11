import PageBreadCrumbs from "@/app/_components/Common/PageBreadCrumbs";
import ProductCard from "@/app/_components/Common/ProductCard";
import { getProducts } from "@/app/_lib/data-service";
import { categoryParamsValidation } from "@/app/_utils/helper";
import {
  CategoryParams,
  CategorySearchParams,
  ListProduct,
} from "@/app/_utils/types";
import CategorySidebar from "./components/CategorySidebar";

const VARIATION = "list";

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
    variation: VARIATION,
    sort,
    discounted,
  });

  return (
    <div className="mx-auto mt-4 max-w-7xl space-y-8 px-6">
      <PageBreadCrumbs />
      {/* sidebar */}
      <div className="flex gap-4">
        <CategorySidebar />
        {/* main */}
        <div className="space-y-16 md:space-y-24">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                variation={VARIATION}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
