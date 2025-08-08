import { Suspense } from "react";
import ProductsSwiperFallback from "../../Common/ProductsSwiper/ProductsSwiperFallback";
import SectionHeader from "../../Common/SectionHeader";
import OffersContent from "./OffersContent";

async function Offers() {
  return (
    <>
      <SectionHeader
        link="products/all"
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
