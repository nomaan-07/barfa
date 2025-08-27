import { Skeleton } from "@heroui/skeleton";
import ProductsSwiperFallback from "./_components/Common/ProductsSwiper/components/ProductsSwiperFallback";
import BannersSkeleton from "./_components/Common/Skeletons/BannersSkeleton";
import BrandsSkeleton from "./_components/Common/Skeletons/BrandsSkeleton";
import CategoriesSkeleton from "./_components/Common/Skeletons/CategoriesSkeleton";
import SectionHeaderSkeleton from "./_components/Common/Skeletons/SectionHeaderSkeleton";

function RootLoading() {
  return (
    <>
      <Skeleton className="h-[50vh] w-full overflow-hidden sm:h-[60vh] lg:h-[70vh] xl:h-[80vh]" />
      <div className="mx-auto mt-16 max-w-7xl space-y-16 px-6 md:space-y-24">
        <div>
          <SectionHeaderSkeleton />
          <ProductsSwiperFallback />
        </div>

        <div>
          <SectionHeaderSkeleton />
          <CategoriesSkeleton />
        </div>

        <BannersSkeleton />

        <div>
          <SectionHeaderSkeleton />
          <ProductsSwiperFallback />
        </div>

        <div>
          <SectionHeaderSkeleton />
          <BrandsSkeleton />
        </div>
      </div>
    </>
  );
}

export default RootLoading;
