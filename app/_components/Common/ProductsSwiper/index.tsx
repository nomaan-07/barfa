"use client";

import { ProductCardData } from "@/app/_utils/types";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../ProductCard";
import SwiperButton from "../SwiperButton";

interface ProductsSwiperProps {
  products: ProductCardData[];
  uniqueId: string;
}

function ProductsSwiper({ products, uniqueId }: ProductsSwiperProps) {
  const prevButtonClass = `swiper-prev-button-${uniqueId}`;
  const nextButtonClass = `swiper-next-button-${uniqueId}`;

  return (
    <Swiper
      freeMode
      spaceBetween={12}
      slidesPerView={"auto"}
      navigation={{
        prevEl: `.${prevButtonClass}`,
        nextEl: `.${nextButtonClass}`,
        disabledClass: "swiper-button-disabled",
      }}
      modules={[Navigation, Pagination]}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id} className="!w-56 not-last:!ml-3">
          <ProductCard product={product} />
        </SwiperSlide>
      ))}

      <SwiperButton direction="prev" className={prevButtonClass} />
      <SwiperButton direction="next" className={nextButtonClass} />
    </Swiper>
  );
}

export default ProductsSwiper;
