"use client";

import { useProductsStore } from "@/app/_store/productStore";
import { useDisclosure } from "@heroui/react";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import CurrentColorLine from "../CurrentColorLine";
import ImageModal from "./components/ImageModal";
import ImageSwiper from "./components/ImageSwiper";
import ImageThumbnails from "./components/ImageThumbnails";
import ProductColorCircles from "./components/ProductColorCircles";
import SlideCounter from "./components/SlideCounter";

function ImageGallery() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const swiperRef = useRef<SwiperType | null>(null);
  const modalSwiperRef = useRef<SwiperType | null>(null);

  const images = useProductsStore((state) => state.galleryImages);
  const selectColorVariant = useProductsStore(
    (state) => state.selectColorVariant,
  );

  const handleSelect = (index: number) => {
    selectColorVariant(images[index].en);
    swiperRef.current?.slideTo(index);
    modalSwiperRef.current?.slideTo(index);
  };

  return (
    <>
      <ImageModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onSelect={handleSelect}
        swiperRef={modalSwiperRef}
      />

      <CurrentColorLine />

      <div className="relative w-full space-y-2 lg:order-2 lg:pr-8">
        <ImageSwiper
          onSelect={handleSelect}
          swiperRef={swiperRef}
          onOpenModal={onOpen}
        />
        <SlideCounter />
        <ImageThumbnails onSelect={handleSelect} />
        <ProductColorCircles onSelect={handleSelect} />
      </div>
    </>
  );
}

export default ImageGallery;
