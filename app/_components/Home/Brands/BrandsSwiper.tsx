"use client";

import { Brand } from "@/app/_utils/types";
import { Image } from "@heroui/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButton from "../../Common/SwiperButton";

interface BrandSwiperProps {
  brands: Brand[];
}

function BrandsSwiper({ brands }: BrandSwiperProps) {
  const prevButtonClass = "swiper-prev-button-brands";
  const nextButtonClass = "swiper-next-button-brands";

  if (!brands) return null;

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
      modules={[Navigation, Pagination]}
    >
      {brands.map((brand) => (
        <SwiperSlide
          key={brand.id}
          className="not-last:border-l-default-200 !w-auto px-4 select-none not-last:border-l"
        >
          <Link
            href={brand.link}
            className="flex size-28 items-center justify-center sm:size-32"
          >
            <Image src={brand.image_src} alt={brand.name} radius="none" />
          </Link>
        </SwiperSlide>
      ))}

      <SwiperButton direction="prev" className={prevButtonClass} />
      <SwiperButton direction="next" className={nextButtonClass} />
    </Swiper>
  );
}

export default BrandsSwiper;
