import { Skeleton } from "@heroui/react";
import ProductsListFallback from "../_components/Common/ProductsList/components/ProductsListFallback";
import DesktopSortSkeleton from "../_components/Common/Skeletons/DesktopSortSkeleton";
import FilterSidebarSkeleton from "../_components/Common/Skeletons/FilterSidebarSkeleton";
import MobileFilterSortButtonsSkeleton from "../_components/Common/Skeletons/MobileFIlterSortButtonsSkeleton";

function SearchLoading() {
  return (
    <div className="mx-auto mt-4 max-w-7xl space-y-8 px-6">
      <div className="flex h-7 items-center sm:h-8">
        <Skeleton className="h-4 w-36 rounded-full sm:h-5 sm:w-52" />
      </div>
      <div className="flex gap-4">
        <FilterSidebarSkeleton />
        <div className="w-full space-y-4">
          <DesktopSortSkeleton />
          <MobileFilterSortButtonsSkeleton />
          <ProductsListFallback />
        </div>
      </div>
    </div>
  );
}

export default SearchLoading;
