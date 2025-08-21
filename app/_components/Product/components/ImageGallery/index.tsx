"use client";

import { Colors, ImageSources } from "@/app/_utils/types";
import { useDisclosure } from "@heroui/react";
import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import CurrentColorLine from "./components/CurrentColorLine";
import ImageModal from "./components/ImageModal";
import ImageSwiper from "./components/ImageSwiper";
import ImageThumbnails from "./components/ImageThumbnails";
import ProductColorCircles from "./components/ProductColorCircles";
import SlideCounter from "./components/SlideCounter";

interface ImageGalleryProps {
  imageSources: ImageSources;
  colors: Colors;
}

function ImageGallery({ imageSources, colors }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperType | null>(null);
  const modalSwiperRef = useRef<SwiperType | null>(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const images = colors.map((color) => ({
    ...color,
    url: imageSources.colors[color.en],
  }));

  const colorsArr = images.map((image) => image.value);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    swiperRef.current?.slideTo(index);
    modalSwiperRef.current?.slideTo(index);
  };

  return (
    <>
      <CurrentColorLine activeImage={images[activeIndex]} />

      <ImageModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        activeIndex={activeIndex}
        images={images}
        onSelect={handleSelect}
        swiperRef={modalSwiperRef}
      />

      <div className="relative w-full lg:mt-2 lg:pr-8">
        <ImageSwiper
          images={images}
          onSelect={handleSelect}
          swiperRef={swiperRef}
          onOpenModal={onOpen}
        />

        <ImageThumbnails
          images={images}
          activeIndex={activeIndex}
          onSelect={handleSelect}
        />

        <ProductColorCircles
          colors={colorsArr}
          activeIndex={activeIndex}
          onSelect={handleSelect}
        />

        <SlideCounter
          currentSlide={activeIndex + 1}
          totalImages={images.length}
        />
      </div>
    </>
  );
}

export default ImageGallery;
