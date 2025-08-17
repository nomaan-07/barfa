"use client";

import SwiperButton from "@/app/_components/Common/SwiperButton";
import { PopularBrand } from "@/app/_utils/types";
import { Image } from "@heroui/image";
import { Skeleton } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface BrandSwiperProps {
  brands: PopularBrand[];
}

function BrandsSwiper({ brands }: BrandSwiperProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const prevButtonClass = "swiper-prev-button-brands";
  const nextButtonClass = "swiper-next-button-brands";

  return (
    <Swiper
      freeMode
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
            <Skeleton isLoaded={isLoaded} className="rounded-xl">
              <div className="flex size-28 items-center justify-center transition-transform sm:size-32 md:hover:scale-105">
                <Image
                  src={brand.image_src}
                  alt={brand.name}
                  radius="none"
                  onLoad={() => setIsLoaded(true)}
                  onError={() => setIsLoaded(true)}
                />
              </div>
            </Skeleton>
          </Link>
        </SwiperSlide>
      ))}

      <SwiperButton direction="prev" className={prevButtonClass} />
      <SwiperButton direction="next" className={nextButtonClass} />
    </Swiper>
  );
}

export default BrandsSwiper;
