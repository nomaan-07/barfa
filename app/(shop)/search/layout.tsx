import { Metadata } from "next";

export const metadata: Metadata = {
  title: "جستجوی محصولات دیجیتال، موبایل، لپ‌تاپ و تبلت",
  description:
    "جستجو و پیدا کردن بهترین موبایل، لپ‌تاپ، تبلت و سایر محصولات دیجیتال با قیمت مناسب، گارانتی معتبر و ارسال سریع از فروشگاه اینترنتی برفا",
};

function SearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default SearchLayout;
