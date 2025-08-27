import { ProductsVariation } from "@/app/_utils/types";
import { Skeleton } from "@heroui/skeleton";
import clsx from "clsx";

interface ProductCardSkeletonProps {
  variation: ProductsVariation;
}

function ProductCardSkeleton({ variation }: ProductCardSkeletonProps) {
  return (
    <div
      className={clsx("shrink-0 overflow-hidden rounded-xl", {
        "border-default-200 w-56 border": variation === "swiper",
        "shadow-small relative hidden sm:block": variation === "list",
      })}
    >
      {/* Image */}
      <Skeleton className="m-auto my-2 size-44 rounded-lg" />

      <div className="flex flex-grow flex-col space-y-4 p-2">
        {/* Title */}
        <div className="flex h-12 flex-col gap-2">
          <Skeleton className="h-4 rounded-full" />
          <Skeleton className="h-4 w-1/2 rounded-full" />
        </div>

        <div className="flex h-13 flex-col justify-end">
          <div className="flex h-6 items-end justify-between pl-8 sm:items-center">
            {/* Circles */}
            <div className="flex gap-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="bg-default-300 size-2.5 rounded-full"
                />
              ))}
            </div>
            {/* Original Price */}
            <Skeleton className="mr-auto h-3 w-16 rounded-full sm:h-4" />
          </div>

          <div className="flex h-6 items-center justify-end sm:h-7">
            {/* Discount Badge */}
            <Skeleton
              className={clsx("h-4 w-7 rounded-full sm:h-5 sm:w-8", {
                "absolute top-2 left-2": variation === "list",
                "ml-auto": variation === "swiper",
              })}
            />
            {/* Final Price */}
            <Skeleton className="h-3 w-28 rounded-full sm:h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
