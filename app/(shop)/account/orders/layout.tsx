import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سفارش‌ها",
  description: "صفحه سفارش‌های شما در حساب کاربری فروشگاه برفا.",
};

function OrdersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default OrdersLayout;
