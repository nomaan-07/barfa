import { getNewestProducts } from "@/app/_lib/data-service";
import ProductsSwiper from "../../Common/ProductsSwiper";
import SectionHeader from "../../Common/SectionHeader";

async function NewProducts() {
  const products = await getNewestProducts();

  return (
    <section>
      <SectionHeader
        link="products/all"
        buttonColor="success"
        bgColor="bg-success"
        textColor="text-white"
        title="جدیدترین محصولات"
      />

      <ProductsSwiper products={products} uniqueId="newProducts" />
    </section>
  );
}

export default NewProducts;
