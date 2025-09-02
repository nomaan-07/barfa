import ProductsListFallback from "@/app/_components/Common/ProductsList/components/ProductsListFallback";
import BreadCrumbsSkeleton from "@/app/_components/Common/Skeletons/BreadCrumbsSkeleton";
import DesktopSortSkeleton from "@/app/_components/Common/Skeletons/DesktopSortSkeleton";
import FilterSidebarSkeleton from "@/app/_components/Common/Skeletons/FilterSidebarSkeleton";
import MobileFilterSortButtonsSkeleton from "@/app/_components/Common/Skeletons/MobileFilterSortButtonsSkeleton";

function CategoryLoading() {
  return (
    <div className="mx-auto mt-4 max-w-7xl space-y-8 px-6">
      <BreadCrumbsSkeleton />
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

export default CategoryLoading;
