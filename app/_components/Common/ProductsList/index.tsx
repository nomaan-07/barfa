import { getProducts } from "@/app/_lib/data-services";
import { ListProduct } from "@/app/_utils/types";
import NoProductsFound from "../../Category/components/NoProductsFound";
import ProductCard from "../ProductCard";

interface ProductsListProps {
  category: string;
  sort?: string;
  discounted?: string;
  available?: string;
  minPrice?: string;
  maxPrice?: string;
  brands?: string[];
  colors?: string[];
}

async function ProductsList({
  category,
  sort,
  discounted,
  available,
  minPrice,
  maxPrice,
  brands,
  colors,
}: ProductsListProps) {
  const products: ListProduct[] = await getProducts({
    category,
    variation: "list",
    sort,
    discounted,
    available,
    minPrice,
    maxPrice,
    brands,
    colors,
  });

  if (products.length === 0) return <NoProductsFound />;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} variation="list" />
      ))}
    </div>
  );
}

export default ProductsList;
