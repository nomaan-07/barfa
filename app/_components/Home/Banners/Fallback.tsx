import { Skeleton } from "@heroui/skeleton";

function Fallback() {
  return (
    <div className="grid gap-8 pt-6 lg:grid-cols-2">
      <Skeleton className="bg-default-200 aspect-video rounded-xl"></Skeleton>
      <Skeleton className="bg-default-200 aspect-video rounded-xl"></Skeleton>
    </div>
  );
}

export default Fallback;
