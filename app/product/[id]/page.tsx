import Product from "@/app/_components/Product";
import { getProduct } from "@/app/_lib/data-services";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(Number(id));

  if (!product) notFound();

  return <Product product={product} />;
}

export default ProductPage;
