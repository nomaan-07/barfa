import { Skeleton } from "@heroui/skeleton";

function BrandsSkeleton() {
  return (
    <div className="flex overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="border-l-default-200 border-l px-4">
          <Skeleton className="size-28 rounded-xl sm:size-32" />
        </div>
      ))}
    </div>
  );
}

export default BrandsSkeleton;
