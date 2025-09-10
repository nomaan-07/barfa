"use client";

import DrawerCloseButton from "@/app/_components/Common/DrawerCloseButton";
import SwiperButton from "@/app/_components/Common/SwiperButton";
import {
  selectorActiveIndex,
  useProductsStore,
} from "@/app/_store/productStore";
import { Modal, ModalContent } from "@heroui/modal";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImageModalProps } from "../types";
import SlideCounter from "./SlideCounter";

function ImageModal({
  onOpenChange,
  isOpen,
  swiperRef,
  onSelect,
}: ImageModalProps) {
  const activeIndex = useProductsStore(selectorActiveIndex);
  const images = useProductsStore((state) => state.galleryImages);

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
            <DrawerCloseButton isAbsolute position="right" onClose={onClose} />

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
                        alt={image.fa}
                        width={1200}
                        height={1200}
                        className="max-h-[75vh]"
                      />
                    </div>
                  </SwiperSlide>
                ))}

                <SwiperButton direction="prev" className={prevButtonClass} />
                <SwiperButton direction="next" className={nextButtonClass} />
              </Swiper>
            </div>

            <SlideCounter isModal />
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ImageModal;
