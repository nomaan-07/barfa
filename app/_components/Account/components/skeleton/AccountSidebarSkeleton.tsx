import { Card, CardBody } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

function AccountSidebarSkeleton() {
  return (
    <Card className="hidden w-64 shrink-0 lg:block">
      <CardBody>
        <div>
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="mb-4 h-12 w-full rounded-lg" />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

export default AccountSidebarSkeleton;
