import { Skeleton } from "@heroui/skeleton";

function ImageGallerySkeleton() {
  return (
    <>
      {/* CurrentColorLine */}
      <div className="order-2 flex w-full items-center gap-2 sm:h-5 lg:order-1 lg:mb-2 lg:h-6">
        <Skeleton className="bg-default-300 h-2 w-36 shrink-0 rounded-full sm:h-3 lg:h-4" />
        <Skeleton className="h-1 w-full rounded-full lg:h-1.5" />
      </div>
      {/* Image */}
      <div className="relative w-full space-y-2 lg:order-2 lg:px-12">
        <div className="flex h-52 items-center justify-center sm:h-64 md:h-72 lg:h-93 lg:p-10 xl:h-127">
          <Skeleton className="aspect-square h-52 rounded-xl sm:h-64 md:h-72 lg:h-93 xl:h-127" />
        </div>

        {/* Product Actions */}
        <div className="mb-2 flex justify-end gap-3 lg:absolute lg:top-1 lg:left-1 lg:z-10 lg:mb-0 lg:flex-col lg:gap-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <Skeleton key={index} className="size-6 rounded-lg" />
          ))}
        </div>

        {/* Color Circles */}
        <div className="mb-2 flex gap-2 lg:absolute lg:top-1 lg:right-1 lg:z-10 lg:mb-0 lg:flex-col">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="size-6 rounded-full" />
          ))}
        </div>

        {/* Slide Counter */}
        <Skeleton className="absolute top-0 left-0 z-10 h-6 w-13 rounded-full bg-black/50 lg:hidden" />

        {/* Image Thumbnails */}

        <div className="hidden justify-center gap-2 lg:flex">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="border-default-300 size-12 overflow-hidden rounded-md border p-1"
            >
              <Skeleton className="size-full rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageGallerySkeleton;
