import { useProductsStore } from "@/app/_store/productStore";
import { Image } from "@heroui/image";
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
          <div className="flex items-center justify-center">
            <Image
              src={image.url}
              alt={image.fa}
              className="size-full max-h-52 rounded-lg select-none sm:max-h-64 md:max-h-72 lg:max-h-135"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageSwiper;
