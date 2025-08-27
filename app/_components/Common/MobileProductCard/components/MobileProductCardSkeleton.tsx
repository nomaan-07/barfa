import { Card, CardBody } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

function MobileProductCardSkeleton() {
  return (
    <Card shadow="sm" className="sm:hidden">
      <CardBody className="flex-row gap-1 text-right">
        <div className="shrink-0">
          {/* Image */}
          <Skeleton className="m-auto size-20 rounded-xl" />
          {/* Color circles */}
          <div className="mt-2 flex justify-center gap-1">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton
                key={index}
                className="bg-default-300 size-2 rounded-full"
              ></Skeleton>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col justify-between">
          {/* Quantity text */}
          <Skeleton className="h-3 w-31 rounded-full" />

          {/* title */}
          <div className="h-10 space-y-2">
            <Skeleton className="h-3 w-full rounded-full" />
            <Skeleton className="h-3 w-1/2 rounded-full" />
          </div>

          <div className="flex items-end justify-between">
            {/* Discount Badge */}
            <Skeleton className={"h-4 w-8 rounded-full"} />

            <div className="flex w-full flex-col items-end gap-1">
              {/* Original Price */}
              <Skeleton className="ml-8 h-3 w-14 rounded-full line-through" />
              {/* Final Price */}
              <Skeleton className="h-3 w-26 rounded-full" />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default MobileProductCardSkeleton;
