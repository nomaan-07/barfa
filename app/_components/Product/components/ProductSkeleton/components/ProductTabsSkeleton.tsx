import { Card, CardBody } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

function ProductTabsSkeleton() {
  return (
    <Card>
      <CardBody className="px-0">
        <div className="px-4">
          <Skeleton className="h-10 w-45 rounded-xl" />
          <div className="mt-3 mb-4 h-28 space-y-4 overflow-hidden sm:h-24">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton
                key={index}
                className="h-3 w-full rounded-full sm:h-4"
              />
            ))}
          </div>
          <Skeleton className="h-8 w-30 rounded-lg" />
        </div>
      </CardBody>
    </Card>
  );
}

export default ProductTabsSkeleton;
