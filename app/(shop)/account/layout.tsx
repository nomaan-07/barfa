import AccountHeader from "@/app/_components/Account/components/AccountHeader";
import AccountSidebar from "@/app/_components/Account/components/AccountSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "حساب کاربری",
  description:
    "در حساب کاربری فروشگاه اینترنتی برفا، اطلاعات شخصی، سفارش‌ها و تنظیمات خود را مشاهده و مدیریت کنید.",
};

function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto mt-4 max-w-7xl space-y-8 px-6">
      <div className="flex flex-col gap-4 md:flex-row-reverse">
        <div className="w-full space-y-4">
          <AccountHeader />
          {children}
        </div>
        <AccountSidebar />
      </div>
    </div>
  );
}

export default AccountLayout;
