import { Skeleton } from "@heroui/skeleton";

interface InputSkeletonProps {
  width: number;
}

function InputSkeleton({ width }: InputSkeletonProps) {
  return (
    <div className="flex h-17 w-full flex-col justify-between">
      <Skeleton className={`h-4 rounded-full w-${width / 4}`} />
      <Skeleton className="h-10 w-full rounded-xl" />
    </div>
  );
}

export default InputSkeleton;
