import { ProductsVariation } from "@/app/_utils/types";
import { Skeleton } from "@heroui/skeleton";
import clsx from "clsx";

interface ProductCardSkeletonProps {
  variation: ProductsVariation;
}

function ProductCardSkeleton({ variation }: ProductCardSkeletonProps) {
  return (
    <div
      className={clsx("shrink-0 rounded-xl", {
        "border-default-200 w-56 border": variation === "swiper",
        "shadow-small relative": variation === "list",
      })}
    >
      {/* Image */}
      <Skeleton className="m-auto my-2 size-44 rounded-xl" />

      <div className="flex flex-grow flex-col space-y-4 p-2">
        {/* Title */}
        <div className="flex h-12 flex-col gap-2">
          <Skeleton className="h-4 rounded-full" />
          <Skeleton className="h-4 w-1/2 rounded-full" />
        </div>

        <div className="flex h-13 flex-col justify-end">
          <div className="flex h-6 items-center justify-between pl-8">
            {/* Circles */}
            <div className="flex gap-1">
              <Skeleton className="bg-default-300 size-2.5 rounded-full"></Skeleton>
              <Skeleton className="bg-default-300 size-2.5 rounded-full"></Skeleton>
            </div>
            {/* Original Price */}
            <Skeleton className="mr-auto h-4 w-16 rounded-full line-through" />
          </div>

          <div className="flex h-7 items-center justify-end">
            {/* Discount Badge */}
            <Skeleton
              className={clsx("bg-danger h-5 w-8 rounded-full", {
                "absolute top-2 left-2": variation === "list",
                "ml-auto": variation === "swiper",
              })}
            />
            {/* Final Price */}
            <Skeleton className="h-4 w-28 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
