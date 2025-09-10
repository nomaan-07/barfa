import AccountHeaderSkeleton from "./AccountHeaderSkeleton";
import AccountSidebarSkeleton from "./AccountSidebarSkeleton";

function AccountWrapperSkeleton({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mt-4 max-w-7xl space-y-8 px-6">
      <div className="flex flex-col gap-4 md:flex-row-reverse">
        <div className="w-full space-y-4">
          <AccountHeaderSkeleton />
          {children}
        </div>
        <AccountSidebarSkeleton />
      </div>
    </div>
  );
}

export default AccountWrapperSkeleton;
