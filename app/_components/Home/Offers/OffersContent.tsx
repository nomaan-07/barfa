import { getDiscountedProducts } from "@/app/_lib/data-service";
import ProductsSwiper from "../../Common/ProductsSwiper";

async function OffersContent() {
  const products = await getDiscountedProducts();

  return (
    <>
      <ProductsSwiper products={products} uniqueId="offers" />
    </>
  );
}

export default OffersContent;
