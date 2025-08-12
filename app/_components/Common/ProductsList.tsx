import { ListProduct } from "@/app/_utils/types";
import ProductCard from "./ProductCard";

interface ProductsListProps {
  products: ListProduct[];
}

function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} variation="list" />
      ))}
    </div>
  );
}

export default ProductsList;
