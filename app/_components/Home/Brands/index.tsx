import { getBrands } from "@/app/_lib/data-service";
import SectionHeader from "../../Common/SectionHeader";
import BrandsSwiper from "./BrandsSwiper";

async function Brands() {
  const brands = await getBrands();

  return (
    <section>
      <SectionHeader
        bgColor="bg-secondary"
        textColor="text-white"
        title="برند‌های محبوب"
      />

      {/* FIXME: add suspense */}
      <BrandsSwiper brands={brands} />
    </section>
  );
}

export default Brands;
