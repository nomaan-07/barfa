import { Card, CardBody } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

function AccountHeaderSkeleton() {
  return (
    <Card className="h-21 sm:h-18">
      <CardBody className="flex-row flex-wrap justify-between">
        <Skeleton className="h-6 w-29 rounded-full sm:h-8 sm:w-40" />
        <div className="flex h-8 w-full flex-col items-end justify-between sm:h-12 sm:w-fit">
          <Skeleton className="h-3 w-16 rounded-full sm:h-5 sm:w-22" />
          <Skeleton className="h-3 w-42 rounded-full sm:h-5 sm:w-56" />
        </div>
      </CardBody>
    </Card>
  );
}

export default AccountHeaderSkeleton;
