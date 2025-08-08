import { Skeleton } from "@heroui/skeleton";

function BannersFallback() {
  return (
    <div className="grid gap-8 pt-6 lg:grid-cols-2">
      <Skeleton className="aspect-video rounded-xl" />
      <Skeleton className="aspect-video rounded-xl" />
    </div>
  );
}

export default BannersFallback;
