import { Skeleton } from "@heroui/skeleton";
import clsx from "clsx";

interface ProductTitleSkeletonProps {
  variant: "mobile" | "desktop";
}

function ProductTitleSkeleton({ variant }: ProductTitleSkeletonProps) {
  return (
    <div
      className={clsx("flex h-12 flex-col sm:h-16 md:h-17 lg:h-18", {
        "lg:hidden": variant === "mobile",
        "hidden lg:block": variant === "desktop",
      })}
    >
      <Skeleton className="mb-3 h-4 w-2/3 rounded-full sm:mb-5 sm:h-5 md:h-6 lg:h-7" />
      <Skeleton className="h-3 w-2/3 self-end rounded-full sm:h-4 lg:w-1/3 lg:self-start" />
    </div>
  );
}

export default ProductTitleSkeleton;
