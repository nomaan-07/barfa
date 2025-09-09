import AccountContent from "@/app/_components/Account/components/AccountContent";
import AccountHeader from "@/app/_components/Account/components/AccountHeader";
import AccountSidebar from "@/app/_components/Account/components/AccountSidebar";

function AccountPage() {
  return (
    <div className="mx-auto mt-4 max-w-7xl space-y-8 px-6">
      <div className="flex flex-col gap-4 md:flex-row-reverse">
        <div className="w-full space-y-4">
          <AccountHeader />
          <AccountContent />
        </div>
        <AccountSidebar />
      </div>
    </div>
  );
}

export default AccountPage;
