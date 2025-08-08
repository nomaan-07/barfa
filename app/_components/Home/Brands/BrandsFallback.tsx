import { Skeleton } from "@heroui/skeleton";

function BrandsFallback() {
  return (
    <div className="overflow-hidden">
      <div className="divide-default-200 flex divide-x">
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="px-4" key={index}>
            <Skeleton className="size-28 rounded-xl sm:size-32"></Skeleton>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandsFallback;
