import AccountFormSkeleton from "@/app/_components/Account/components/skeleton/AccountFormSkeleton";
import AccountHeaderSkeleton from "@/app/_components/Account/components/skeleton/AccountHeaderSkeleton";
import AccountMobileNavSkeleton from "@/app/_components/Account/components/skeleton/AccountMobileNavSkeleton";
import AccountSidebarSkeleton from "@/app/_components/Account/components/skeleton/AccountSidebarSkeleton";

function AccountLoading() {
  return (
    <div className="mx-auto mt-4 max-w-7xl space-y-8 px-6">
      <div className="flex flex-col gap-4 md:flex-row-reverse">
        <div className="w-full space-y-4">
          <AccountHeaderSkeleton />
          <AccountFormSkeleton />
        </div>
        <AccountSidebarSkeleton />
      </div>
      <AccountMobileNavSkeleton />
    </div>
  );
}

export default AccountLoading;
