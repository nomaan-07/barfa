import ProductsSwiper from "@/app/_components/Common/ProductsSwiper";
import { getProducts } from "@/app/_lib/data-services";

async function OffersContent() {
  const products = await getProducts({
    variation: "swiper",
    category: "all",
    discounted: "1",
  });

  return <ProductsSwiper products={products} uniqueId="offers" />;
}

export default OffersContent;
