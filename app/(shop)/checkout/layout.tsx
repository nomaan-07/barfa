import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تسویه حساب",
  description:
    "در صفحه تسویه حساب فروشگاه اینترنتی برفا، اطلاعات پرداخت و ارسال خود را تکمیل کرده و سفارش خود را نهایی کنید.",
};

function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto mt-4 flex max-w-7xl gap-4 px-6">
      {children}
    </div>
  );
}

export default CheckoutLayout;
