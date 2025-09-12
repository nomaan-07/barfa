import { Metadata } from "next";

export const metadata: Metadata = {
  title: "علاقه‌مندی‌ها",
  description: "صفحه علاقه‌مندی‌های شما در حساب کاربری فروشگاه برفا.",
};

function FavoritesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default FavoritesLayout;
