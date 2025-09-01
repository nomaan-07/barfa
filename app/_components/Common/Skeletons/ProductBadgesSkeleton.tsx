import { Skeleton } from "@heroui/skeleton";
import clsx from "clsx";

interface ProductBadgesSkeletonProps {
  size: "sm" | "lg";
}

function ProductBadgesSkeleton({ size }: ProductBadgesSkeletonProps) {
  return (
    <div className="flex w-full flex-wrap justify-between gap-2">
      <Skeleton
        className={clsx("rounded-full", {
          "h-6 w-23": size === "sm",
          "h-8 w-33": size === "lg",
        })}
      />
      <Skeleton
        className={clsx("rounded-full", {
          "h-6 w-35": size === "sm",
          "h-8 w-50": size === "lg",
        })}
      />
    </div>
  );
}

export default ProductBadgesSkeleton;
