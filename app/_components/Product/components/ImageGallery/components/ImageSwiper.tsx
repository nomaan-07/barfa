import { useProductsStore } from "@/app/_store/productStore";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImageSwiperProps } from "../types";

function ImageSwiper({ swiperRef, onSelect, onOpenModal }: ImageSwiperProps) {
  const images = useProductsStore((state) => state.galleryImages);

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChange={(swiper) => onSelect(swiper.activeIndex)}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} onClick={onOpenModal}>
          <Image
            src={image.url}
            alt={image.fa}
            width={1200}
            height={1200}
            className="h-52 w-full object-contain select-none sm:h-64 md:h-72 lg:h-93 xl:h-127"
            priority={index === 0}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageSwiper;
