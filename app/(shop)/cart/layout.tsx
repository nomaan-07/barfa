import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سبد خرید",
  description:
    "بررسی و مدیریت محصولات انتخاب‌شده در فروشگاه اینترنتی برفا. قبل از ثبت سفارش، قیمت نهایی و جزئیات محصولات خود را مشاهده کنید.",
};

function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

export default CartLayout;
