import { Skeleton } from "@heroui/react";

function BannersSkeleton() {
  return (
    <div className="grid gap-8 pt-6 lg:grid-cols-2">
      {Array.from({ length: 2 }).map((_, i) => (
        <Skeleton key={i} className="aspect-video rounded-xl" />
      ))}
    </div>
  );
}

export default BannersSkeleton;
