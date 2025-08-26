import { getProducts } from "@/app/_lib/data-services";
import { ListProduct } from "@/app/_utils/types";
import MobileProductCard from "../MobileProductCard";
import ProductCard from "../ProductCard";
import NoProductsFound from "./components/NoProductsFound";

interface ProductsListProps {
  category: string;
  sort?: string;
  discounted?: string;
  available?: string;
  minPrice?: string;
  maxPrice?: string;
  brands?: string[];
  colors?: string[];
  query?: string;
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
  query,
}: ProductsListProps) {
  let products: ListProduct[] = [];

  products = await getProducts({
    category,
    variation: "list",
    sort,
    discounted,
    available,
    minPrice,
    maxPrice,
    brands,
    colors,
    query,
  });

  if (products.length === 0)
    return <NoProductsFound size="medium" variant="products-list" />;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} variation="list" />
          <MobileProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
