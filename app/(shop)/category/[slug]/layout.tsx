import { getCategoryBySlug } from "@/app/_utils/helper";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === "all")
    return {
      title: "دسته بندی محصولات",
      description: "خرید بهترین محصولات دیجیتال از برفا",
    };

  const category = getCategoryBySlug(slug);

  return {
    title: category.fa,
    description: `خرید انواع محصولات ${category.fa} با بهترین کیفیت و قیمت مناسب`,
  };
}

function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

export default CategoryLayout;
