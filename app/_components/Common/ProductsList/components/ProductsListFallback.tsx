import ProductCardSkeleton from "../../ProductCard/components/ProductCardSkeleton";

function ProductsListFallback() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 9 }).map((_, index) => (
        <ProductCardSkeleton key={index} variation="list" />
      ))}
    </div>
  );
}

export default ProductsListFallback;
