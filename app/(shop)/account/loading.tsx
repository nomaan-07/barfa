import AccountFormSkeleton from "@/app/_components/Account/components/skeleton/AccountFormSkeleton";
import AccountWrapperSkeleton from "@/app/_components/Account/components/skeleton/AccountWrapperSkeleton";

function AccountLoading() {
  return (
    <AccountWrapperSkeleton>
      <AccountFormSkeleton />
    </AccountWrapperSkeleton>
  );
}

export default AccountLoading;
