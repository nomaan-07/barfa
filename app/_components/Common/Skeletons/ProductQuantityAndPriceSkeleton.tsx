import { Skeleton } from "@heroui/skeleton";

function ProductQuantityAndPriceSkeleton() {
  return (
    <div className="flex items-center justify-between">
      {/* Quantity */}
      <Skeleton className="h-12 w-32 rounded-xl sm:h-17 sm:w-42" />
      {/* Price */}
      <div>
        <div className="mb-2 flex gap-4">
          <Skeleton className="h-5 w-19 rounded-full" />
          <Skeleton className="h-4 w-7 rounded-full sm:h-5 sm:w-8" />
        </div>
        <Skeleton className="h-4 w-28 rounded-full sm:h-5 sm:w-31" />
      </div>
    </div>
  );
}

export default ProductQuantityAndPriceSkeleton;
