import { Suspense } from "react";
import SectionHeader from "../../Common/SectionHeader";
import BrandsContent from "./components/BrandsContent";
import BrandsFallback from "./components/BrandsFallback";

async function Brands() {
  return (
    <section>
      <SectionHeader
        bgColor="bg-secondary"
        textColor="text-white"
        title="برند‌های محبوب"
      />

      <Suspense fallback={<BrandsFallback />}>
        <BrandsContent />
      </Suspense>
    </section>
  );
}

export default Brands;
