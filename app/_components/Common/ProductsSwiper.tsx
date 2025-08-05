"use client";

import { Product } from "@/app/_utils/types";
import { Button } from "@heroui/button";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

interface ProductsSwiperProps {
  products: Product[];
  uniqueId: string;
}

function ProductsSwiper({ products, uniqueId }: ProductsSwiperProps) {
  const prevButtonClass = `swiper-prev-button-${uniqueId}`;
  const nextButtonClass = `swiper-next-button-${uniqueId}`;

  return (
    <Swiper
      freeMode
      spaceBetween={12}
      slidesPerView="auto"
      navigation={{
        prevEl: `.${prevButtonClass}`,
        nextEl: `.${nextButtonClass}`,
        disabledClass: "swiper-button-disabled",
      }}
      modules={[Navigation, Pagination, Autoplay]}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id} className="!w-auto">
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
      <Button
        isIconOnly
        className={`${prevButtonClass} absolute top-2/5 right-1 z-40 hidden lg:flex`}
      >
        <LucideChevronRight />
      </Button>
      <Button
        isIconOnly
        className={`${nextButtonClass} absolute top-2/5 left-1 z-40 hidden lg:flex`}
      >
        <LucideChevronLeft />
      </Button>
    </Swiper>
  );
}

export default ProductsSwiper;
