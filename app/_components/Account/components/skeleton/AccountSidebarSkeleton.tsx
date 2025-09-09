import { Card, CardBody } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

function AccountSidebarSkeleton() {
  return (
    <Card className="shrink-0 md:w-64">
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
