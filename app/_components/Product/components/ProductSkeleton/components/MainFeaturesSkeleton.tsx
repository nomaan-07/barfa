import { Card } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

function MainFeaturesSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <Card key={index} className="h-15 sm:h-18">
          <div className="p-2 sm:p-3">
            <Skeleton className="mb-4 h-3 w-25 rounded-full sm:mb-5" />
            <Skeleton className="h-4 w-20 rounded-full sm:w-21" />
          </div>
        </Card>
      ))}
    </div>
  );
}

export default MainFeaturesSkeleton;
