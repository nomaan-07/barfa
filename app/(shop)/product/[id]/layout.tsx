import { getProduct } from "@/app/_lib/data-services";
import { notFound } from "next/navigation";

const MAX_TITLE_LENGTH = 56;
const MAX_DESC_LENGTH = 155;

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return truncated.slice(0, lastSpace) + "…";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(Number(id));

  if (!product) notFound();

  const { title_fa: title, introduction } = product;

  const seoTitle = truncateText(title, MAX_TITLE_LENGTH);

  const seoDescription = introduction
    ? truncateText(introduction, MAX_DESC_LENGTH)
    : `خرید ${seoTitle} با بهترین کیفیت، قیمت مناسب و ارسال سریع از فروشگاه اینترنتی برفا`;

  return {
    title: seoTitle,
    description: seoDescription,
  };
}

function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default ProductLayout;
