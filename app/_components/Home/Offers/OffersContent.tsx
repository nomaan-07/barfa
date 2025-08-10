import { getProducts } from "@/app/_lib/data-service";
import ProductsSwiper from "../../Common/ProductsSwiper";

async function OffersContent() {
  const products = await getProducts({
    variation: "swiper",
    filter: "discounted",
  });

  return (
    <>
      <ProductsSwiper products={products} uniqueId="offers" />
    </>
  );
}

export default OffersContent;
