import AccountForm from "@/app/_components/Account/components/AccountForm";
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

  return <AccountForm user={safeUser} />;
}

export default AccountPage;
