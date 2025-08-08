import { Skeleton } from "@heroui/skeleton";
import ProductsSwiperFallback from "./_components/Common/ProductsSwiper/ProductsSwiperFallback";

function loading() {
  return (
    <>
      <Skeleton className="h-[50vh] w-full overflow-hidden sm:h-[60vh] lg:h-[70vh] xl:h-[80vh]" />
      <div className="mx-auto mt-16 max-w-7xl px-6 md:mt-24">
        <Skeleton className="mb-4 h-14 rounded-md" />
        <ProductsSwiperFallback />
      </div>
    </>
  );
}

export default loading;
