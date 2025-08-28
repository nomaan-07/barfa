import ProductInitializer from "@/app/_components/Product/ProductInitializer";
import { getProduct } from "@/app/_lib/data-services";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(Number(id));

  return <ProductInitializer key={id} product={product} />;
}

export default ProductPage;
