import { Metadata } from "next";

export const metadata: Metadata = {
  title: "جستجوی محصولات",
  description: "جستجو در فروشگاه اینترنتی برفا برای محصولات دیجیتال",
};

function SearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default SearchLayout;
