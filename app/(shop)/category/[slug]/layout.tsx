import { getCategoryBySlug } from "@/app/_utils/helper";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === "all")
    return {
      title: "همه دسته‌بندی‌های محصولات دیجیتال و تکنولوژی",
      description:
        "خرید آنلاین بهترین محصولات دیجیتال شامل موبایل، لپ‌تاپ، تبلت و گجت‌ها از فروشگاه اینترنتی برفا با ارسال سریع و گارانتی معتبر",
    };

  const category = getCategoryBySlug(slug);

  return {
    title: `محصولات ${category.fa} با بهترین قیمت و بالاترین کیفیت`,
    description: `خرید آنلاین انواع محصولات ${category.fa} با بهترین کیفیت، قیمت مناسب، ارسال سریع، گارانتی معتبر و پشتیبانی حرفه‌ای از فروشگاه اینترنتی برفا`,
  };
}

function CategoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default CategoryLayout;
