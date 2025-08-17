import { getBrands } from "@/app/_lib/data-services";
import BrandsSwiper from "./BrandsSwiper";

async function BrandsContent() {
  const brands = await getBrands();

  return <BrandsSwiper brands={brands} />;
}

export default BrandsContent;
