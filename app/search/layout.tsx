export function generateMetadata() {
  return {
    title: "جستجوی محصولات",
    description: "جستجو در فروشگاه اینترنتی برفا برای محصولات دیجیتال",
  };
}

function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export default SearchLayout;
