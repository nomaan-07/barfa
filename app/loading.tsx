import { Skeleton } from "@heroui/skeleton";
import ProductsSwiperFallback from "./_components/Common/ProductsSwiper/components/ProductsSwiperFallback";
import CategoriesSkeleton from "./_components/Common/Skeletons/CategoriesSkeleton";
import SectionHeaderSkeleton from "./_components/Common/Skeletons/SectionHeaderSkeleton";
import BannersFallback from "./_components/Home/Banners/components/BannersFallback";
import BrandsFallback from "./_components/Home/Brands/components/BrandsFallback";

function RootLoading() {
  return (
    <>
      {/* Header */}
      <Skeleton className="bg-default-300 h-16 w-full" />

      {/* Hero Section */}
      <Skeleton className="aspect-video w-full overflow-hidden xl:h-[80vh]" />
      <div className="mx-auto mt-16 max-w-7xl space-y-16 px-6 md:space-y-24">
        <div>
          <SectionHeaderSkeleton />
          <ProductsSwiperFallback />
        </div>

        <div>
          <SectionHeaderSkeleton />
          <CategoriesSkeleton />
        </div>

        <BannersFallback />

        <div>
          <SectionHeaderSkeleton />
          <ProductsSwiperFallback />
        </div>

        <div>
          <SectionHeaderSkeleton />
          <BrandsFallback />
        </div>
      </div>
    </>
  );
}

export default RootLoading;
