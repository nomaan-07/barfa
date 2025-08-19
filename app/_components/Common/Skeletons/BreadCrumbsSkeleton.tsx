import { Skeleton } from "@heroui/skeleton";
import { LucideChevronLeft } from "lucide-react";

function BreadCrumbsSkeleton() {
  return (
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
  );
}

export default BreadCrumbsSkeleton;
