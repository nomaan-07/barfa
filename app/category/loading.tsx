import { Skeleton } from "@heroui/skeleton";
import { LucideChevronLeft } from "lucide-react";
import ProductsListFallback from "../_components/Common/ProductsList/components/ProductsListFallback";

function CategoryLoading() {
  return (
    <div className="mx-auto mt-4 max-w-7xl space-y-8 px-6">
      {/* BreadCrumb */}
      <div className="flex h-5 items-center">
        <Skeleton className="h-4 w-28 rounded-full" />
        <span className="px-1">
          <LucideChevronLeft className="text-default-300 size-4" />
        </span>
        <Skeleton className="h-4 w-28 rounded-full" />
        <span className="px-1">
          <LucideChevronLeft className="text-default-300 size-4" />
        </span>
        <Skeleton className="h-4 w-14 rounded-full" />
      </div>
      <div className="flex gap-4">
        {/* Sidebar */}
        <Skeleton className="hidden h-[345px] w-64 shrink-0 rounded-xl lg:block">
          <div className="mx-2 flex justify-between border-b py-4">
            <h2 className="text-lg font-semibold">فیلتر‌ها</h2>
          </div>
        </Skeleton>

        <div className="w-full space-y-4">
          {/* Desktop Sort */}
          <Skeleton className="hidden h-10 rounded-xl lg:block" />
          {/* Mobile Filter and Sort buttons */}
          <div className="flex justify-between lg:hidden">
            <Skeleton className="h-10 w-21 rounded-xl" />
            <Skeleton className="h-10 w-30 rounded-xl" />
          </div>

          {/* Product List */}
          <ProductsListFallback />
        </div>
      </div>
    </div>
  );
}

export default CategoryLoading;
