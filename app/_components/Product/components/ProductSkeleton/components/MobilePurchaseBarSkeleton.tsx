import { Skeleton } from "@heroui/react";

function MobilePurchaseBarSkeleton() {
  return (
    <div className="border-default-200 fixed inset-x-0 bottom-0 z-40 border-t bg-white p-3 lg:hidden">
      <Skeleton className="bg-success mx-auto h-10 w-full rounded-xl text-white sm:mr-0 sm:w-48" />
    </div>
  );
}

export default MobilePurchaseBarSkeleton;
