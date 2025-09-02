import { getProduct } from "@/app/_lib/data-services";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(Number(id));

  if (!product) notFound();

  return {
    title: product.title_fa,
    description: "خرید بهترین محصولات دیجیتال از برفا",
  };
}

function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export default ProductLayout;
