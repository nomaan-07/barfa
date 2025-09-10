import AccountHeader from "@/app/_components/Account/components/AccountHeader";
import AccountMobileNav from "@/app/_components/Account/components/AccountMobileNav";
import AccountSidebar from "@/app/_components/Account/components/AccountSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "برفا | %s",
    default: "حساب کاربری",
  },
  description:
    "در حساب کاربری فروشگاه اینترنتی برفا، اطلاعات شخصی، سفارش‌ها و تنظیمات خود را مشاهده و مدیریت کنید.",
};

function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mt-4 max-w-7xl space-y-8 px-6">
      <div className="flex gap-4">
        <AccountSidebar />
        <div className="w-full space-y-4">
          <AccountHeader />
          {children}
        </div>
      </div>
      <AccountMobileNav />
    </div>
  );
}

export default AccountLayout;
