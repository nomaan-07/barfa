"use client";

import DrawerCloseButton from "@/app/_components/Common/DrawerCloseButton";
import SwiperButton from "@/app/_components/Common/SwiperButton";
import { Image } from "@heroui/image";
import { Modal, ModalContent } from "@heroui/modal";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImageModalProps } from "../types";
import SlideCounter from "./SlideCounter";

function ImageModal({
  images,
  activeIndex,
  onOpenChange,
  isOpen,
  swiperRef,
  onSelect,
}: ImageModalProps) {
  const prevButtonClass = `swiper-prev-button--image-modal`;
  const nextButtonClass = `swiper-next-button--image-modal`;

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
      backdrop="blur"
      size="3xl"
      placement="center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <div className="absolute top-2 right-2 z-10">
              <DrawerCloseButton onClose={onClose} />
            </div>

            <div>
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => onSelect(swiper.activeIndex)}
                initialSlide={activeIndex}
                navigation={{
                  prevEl: `.${prevButtonClass}`,
                  nextEl: `.${nextButtonClass}`,
                  disabledClass: "swiper-button-disabled",
                }}
                modules={[Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex items-center justify-center p-10">
                      <Image
                        src={image.url}
                        alt={`تصویر ${image.fa} محصول`}
                        className="sm:max-h-[75vh]"
                      />
                    </div>
                  </SwiperSlide>
                ))}

                <SwiperButton direction="prev" className={prevButtonClass} />
                <SwiperButton direction="next" className={nextButtonClass} />
              </Swiper>
            </div>

            <SlideCounter
              currentSlide={activeIndex + 1}
              totalImages={images.length}
              isModal
            />
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ImageModal;
