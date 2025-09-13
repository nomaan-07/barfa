import { getProducts } from "@/app/_lib/data-services";
import ProductsSwiper from "../../Common/ProductsSwiper";
import SectionHeader from "../../Common/SectionHeader";

async function NewProducts() {
  const products = await getProducts({
    variation: "swiper",
    category: "all",
    sort: "newest",
  });

  return (
    <section>
      <SectionHeader
        link="/category/all?sort=newest"
        buttonColor="success"
        bgColor="bg-success"
        textColor="text-white"
        title="جدیدترین‌ها"
      />

      <ProductsSwiper products={products} uniqueId="newProducts" />
    </section>
  );
}

export default NewProducts;
