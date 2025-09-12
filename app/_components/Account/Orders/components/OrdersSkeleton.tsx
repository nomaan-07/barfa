import { Card, CardBody } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";
import AccountSectionHeaderSkeleton from "../../components/skeleton/AccountSectionHeaderSkeleton";

function OrdersSkeleton() {
  return (
    <Card>
      <AccountSectionHeaderSkeleton />
      <CardBody className="flex flex-col gap-2">
        {/* Tabs */}
        <Skeleton className="h-10 w-59 rounded-xl" />
        {/* OrdersList */}
        <div className="mx-1 my-3 space-y-4">
          {Array.from({ length: 2 }).map((_, index) => (
            <Card key={index}>
              <CardBody className="flex flex-col items-start justify-between gap-4 p-4 sm:flex-row sm:items-center sm:p-6">
                <div className="flex flex-1 flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <Skeleton className="h-7 w-12 rounded-lg" />

                  {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="h-5">
                      <Skeleton className="h-4 w-28 rounded-full" />
                    </div>
                  ))}
                </div>

                <div className="w-full flex-shrink-0 sm:w-auto">
                  <Skeleton className="h-8 w-full rounded-lg sm:w-32" />
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

export default OrdersSkeleton;
