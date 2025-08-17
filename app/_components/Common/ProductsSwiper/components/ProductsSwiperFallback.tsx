import ProductCardSkeleton from "../../ProductCard/components/ProductCardSkeleton";

function ProductsSwiperFallback() {
  return (
    <div className="overflow-hidden">
      <div className="flex gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCardSkeleton key={index} variation="swiper" />
        ))}
      </div>
    </div>
  );
}

export default ProductsSwiperFallback;
