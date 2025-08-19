import { Skeleton } from "@heroui/skeleton";

function MobileFilterSortButtonsSkeleton() {
  return (
    <div className="flex justify-between lg:hidden">
      <Skeleton className="h-10 w-21 rounded-xl" />
      <Skeleton className="h-10 w-30 rounded-xl" />
    </div>
  );
}

export default MobileFilterSortButtonsSkeleton;
