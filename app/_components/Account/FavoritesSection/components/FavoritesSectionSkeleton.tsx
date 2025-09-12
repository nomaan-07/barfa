import { Card, CardBody } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";
import AccountSectionHeaderSkeleton from "../../components/skeleton/AccountSectionHeaderSkeleton";

function FavoritesSectionSkeleton() {
  return (
    <Card>
      <AccountSectionHeaderSkeleton />
      <CardBody>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="shadow-small space-y-2 rounded-xl p-3">
              <div className="flex shrink-0 items-center justify-center">
                <Skeleton className="size-28 rounded-2xl" />
              </div>

              <div className="flex h-10 flex-col justify-end gap-2 sm:h-12">
                {Array.from({ length: 2 }).map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full rounded-full" />
                ))}
              </div>

              <Skeleton className="h-10 w-full rounded-xl" />
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

export default FavoritesSectionSkeleton;
