import { Card } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

function ProductsSwiperFallback() {
  return (
    <div className="overflow-hidden">
      <div className="flex gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            shadow="none"
            className="border-default-200 w-56 shrink-0 border"
          >
            {/* Image */}
            <Skeleton className="m-auto my-2 size-44 rounded-xl" />

            <div className="flex flex-grow flex-col space-y-4 p-2">
              {/* Title */}
              <div className="flex h-12 flex-col gap-2">
                <Skeleton className="h-4 rounded-full" />
                <Skeleton className="h-4 w-1/2 rounded-full" />
              </div>

              <div className="flex h-13 flex-col justify-end">
                <div className="flex h-6 items-center justify-between pl-8">
                  {/* Circles */}
                  <div className="flex gap-1">
                    <Skeleton className="bg-default-300 size-2.5 rounded-full"></Skeleton>
                    <Skeleton className="bg-default-300 size-2.5 rounded-full"></Skeleton>
                  </div>
                  {/* Original Price */}
                  <Skeleton className="mr-auto h-4 w-16 rounded-full line-through" />
                </div>

                <div className="flex h-7 items-center justify-between">
                  {/* Discount Badge */}
                  <Skeleton className="bg-danger ml-auto h-5 w-6 rounded-md" />
                  {/* Final Price */}
                  <Skeleton className="h-4 w-28 rounded-full" />
                </div>
              </div>

              {/* Button */}
              <Skeleton className="bg-primary h-10 rounded-lg" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductsSwiperFallback;
