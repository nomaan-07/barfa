import { Card, CardBody } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

function CategoriesSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-y-12 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card
          key={i}
          className="border-default-100 h-31 rounded-2xl border bg-white/60 shadow-md backdrop-blur-lg sm:h-45"
        >
          <CardBody className="flex flex-col items-center justify-center p-2 sm:p-6">
            <Skeleton className="size-16 rounded-full shadow-lg sm:size-20" />
            <Skeleton className="mt-5 h-3 w-14 rounded-full sm:h-5" />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default CategoriesSkeleton;
