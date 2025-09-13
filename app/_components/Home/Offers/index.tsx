import { Suspense } from "react";
import ProductsSwiperFallback from "../../Common/ProductsSwiper/components/ProductsSwiperFallback";
import SectionHeader from "../../Common/SectionHeader";
import OffersContent from "./components/OffersContent";

async function Offers() {
  return (
    <>
      <SectionHeader
        link="/category/all?discounted=1"
        buttonColor="danger"
        bgColor="bg-danger"
        textColor="text-white"
        title="پیشنهاد ویژه"
      />
      <Suspense fallback={<ProductsSwiperFallback />}>
        <OffersContent />
      </Suspense>
    </>
  );
}

export default Offers;
