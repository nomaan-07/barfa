import { Skeleton } from "@heroui/skeleton";
import { Spinner } from "@heroui/spinner";
import InsuranceSkeleton from "../../Common/Skeletons/InsuranceSkeleton";
import ProductBadgesSkeleton from "../../Common/Skeletons/ProductBadgesSkeleton";
import ProductQuantityAndPriceSkeleton from "../../Common/Skeletons/ProductQuantityAndPriceSkeleton";
import { CartBaseProps } from "../types";

function CartSkeleton({ variant }: CartBaseProps) {
  if (variant === "panel") {
    return (
      <div className="shadow-medium flex h-136 w-112 items-center justify-center rounded-2xl bg-white">
        <Spinner size="lg" />
      </div>
    );
  }
  return (
    <div className="mx-auto mt-4 flex max-w-7xl gap-4 px-6">
      <div className="divide-default-200 w-full divide-y sm:space-y-4 sm:divide-none">
        {/* Header */}
        <div className="sm:shadow-medium h-20 py-2 sm:h-25 sm:rounded-2xl sm:p-4">
          <Skeleton className="h-4 w-24 rounded-full font-black sm:h-5 sm:w-26 sm:text-lg" />
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-7 rounded-full" />
            <Skeleton className="h-10 w-28 rounded-xl" />
          </div>
        </div>

        {/* Products */}
        <div className="divide-default-200 divide-y sm:space-y-4 sm:divide-none">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="sm:shadow-medium space-y-4 py-4 sm:rounded-2xl sm:px-4"
            >
              <div className="flex gap-2">
                {/* Image */}
                <Skeleton className="size-28 shrink-0 rounded-xl" />
                <div className="mt-2 w-full space-y-3">
                  {/* Title */}
                  <Skeleton className="h-3 w-full rounded-full sm:h-4" />
                  <Skeleton className="h-3 w-full rounded-full sm:h-4 md:hidden lg:block xl:hidden" />
                  <Skeleton className="h-3 w-full rounded-full sm:hidden sm:h-4" />

                  {/* Current Color */}
                  <div className="flex items-center gap-1">
                    <Skeleton className="h-4 w-16 rounded-full" />
                    <Skeleton className="size-4 rounded-full" />
                  </div>

                  {/* Quantity text */}
                  <Skeleton className="h-2 w-36 rounded-full" />
                </div>
              </div>

              <ProductBadgesSkeleton size="sm" />
              <InsuranceSkeleton />
              <ProductQuantityAndPriceSkeleton />
            </div>
          ))}
        </div>
      </div>

      {/* Summary Card */}
      <div className="lg:shadow-medium border-t-default-200 fixed inset-x-0 bottom-0 z-30 flex h-29 w-full shrink-0 flex-col justify-between space-y-4 border-t bg-white p-4 sm:h-26 sm:flex-row sm:items-center sm:space-y-0 lg:static lg:h-29 lg:w-80 lg:flex-col lg:items-start lg:space-y-4 lg:rounded-2xl">
        <div className="flex h-7 w-full items-center justify-between sm:h-12 sm:w-auto sm:flex-col lg:h-7 lg:w-full lg:flex-row">
          <Skeleton className="h-4 w-24 rounded-full" />
          <Skeleton className="h-4 w-28 rounded-full sm:h-5 sm:w-31" />
        </div>

        {/* Button */}
        <Skeleton className="h-10 w-full rounded-xl sm:w-38 lg:w-full" />
      </div>
    </div>
  );
}

export default CartSkeleton;
