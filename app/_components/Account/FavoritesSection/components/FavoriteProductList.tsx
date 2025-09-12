import { FavoriteProducts } from "@/app/_utils/types";
import FavoriteProduct from "./FavoriteProduct";

interface FavoriteProductListProps {
  products: FavoriteProducts;
}
function FavoriteProductList({ products }: FavoriteProductListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <FavoriteProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

export default FavoriteProductList;
