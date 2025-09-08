import AccountSidebar from "@/app/_components/Account/components/AccountSidebar";
import { Card } from "@heroui/card";

function AccountPage() {
  return (
    <div className="mx-auto mt-4 max-w-7xl space-y-8 px-6">
      <div className="flex flex-col gap-4 md:flex-row-reverse">
        <Card className="h-50 w-full"></Card>
        <AccountSidebar />
      </div>
    </div>
  );
}

export default AccountPage;
