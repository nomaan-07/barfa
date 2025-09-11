import { Skeleton } from "@heroui/skeleton";

function AccountMobileNavSkeleton() {
  return (
    <div className="border-t-default-200 fixed right-0 bottom-0 left-0 z-50 flex justify-between border-t bg-white p-2 lg:hidden">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton key={index} className="h-12 w-25 rounded-xl" />
      ))}
    </div>
  );
}

export default AccountMobileNavSkeleton;
