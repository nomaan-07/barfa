import { getProducts } from "@/app/_lib/data-service";
import { sortProducts } from "@/app/_utils/helper";
import ProductsSwiper from "../../Common/ProductsSwiper";
import SectionHeader from "../../Common/SectionHeader";

async function NewProducts() {
  let products = await getProducts({ variation: "swiper" });

  products = sortProducts({ products, field: "newest" });

  return (
    <section>
      <SectionHeader
        link="category/all?sort=newest"
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
