import AccountForm from "@/app/_components/Account/components/AccountForm";
import AccountHeader from "@/app/_components/Account/components/AccountHeader";
import AccountSidebar from "@/app/_components/Account/components/AccountSidebar";
import { getUserFromCookie } from "@/app/_lib/actions";
import { redirect } from "next/navigation";

async function AccountPage() {
  const user = await getUserFromCookie();

  if (!user) redirect("/");

  const safeUser = {
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    phone: user.phone,
  };

  return (
    <div className="mx-auto mt-4 max-w-7xl space-y-8 px-6">
      <div className="flex flex-col gap-4 md:flex-row-reverse">
        <div className="w-full space-y-4">
          <AccountHeader />
          <AccountForm user={safeUser} />
        </div>
        <AccountSidebar />
      </div>
    </div>
  );
}

export default AccountPage;
