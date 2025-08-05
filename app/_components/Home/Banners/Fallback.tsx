import { Skeleton } from "@heroui/skeleton";

function Fallback() {
  return (
    <div className="grid gap-8 pt-6 lg:grid-cols-2">
      <Skeleton className="bg-default-200 aspect-[16/9] rounded-lg"></Skeleton>
      <Skeleton className="bg-default-200 aspect-[16/9] rounded-lg"></Skeleton>
    </div>
  );
}

export default Fallback;
