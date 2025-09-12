import { CardHeader } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

function AccountSectionHeaderSkeleton() {
  return (
    <CardHeader className="h-12 sm:h-13">
      <Skeleton className="h-4 w-36 rounded-full sm:h-5 sm:w-41" />
    </CardHeader>
  );
}

export default AccountSectionHeaderSkeleton;
