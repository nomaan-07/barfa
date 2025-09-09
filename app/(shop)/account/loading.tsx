import AccountEditButtonSkeleton from "@/app/_components/Account/components/skeleton/AccountEditButtonSkeleton";
import AccountWrapperSkeleton from "@/app/_components/Account/components/skeleton/AccountWrapperSkeleton";

function Loading() {
  return (
    <AccountWrapperSkeleton>
      <AccountEditButtonSkeleton />
    </AccountWrapperSkeleton>
  );
}

export default Loading;
