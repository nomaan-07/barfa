import PageBreadCrumbs from "@/app/_components/Common/PageBreadCrumbs";
import ProductCard from "@/app/_components/Common/ProductCard";
import { getProducts } from "@/app/_lib/data-service";
import { sortProducts } from "@/app/_utils/helper";
import {
  CategoryParams,
  CategorySearchParams,
  ListProduct,
} from "@/app/_utils/types";
import CategorySidebar from "./components/CategorySidebar";

interface CategoryProps {
  params: CategoryParams;
  searchParams: CategorySearchParams;
}

async function Category({ params, searchParams }: CategoryProps) {
  const { slug } = await params;
  const { sort } = await searchParams;

  const VARIATION = "list";
  let products: ListProduct[] = [];

  if (slug === "all") {
    products = await getProducts({ filter: "all", variation: VARIATION });
  }

  if (slug === "discounted")
    products = await getProducts({
      filter: "discounted",
      variation: VARIATION,
    });

  if (sort === "newest") products = sortProducts({ products, field: "newest" });

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
