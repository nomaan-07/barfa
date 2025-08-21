import { RefObject } from "react";
import { Swiper as SwiperType } from "swiper";

export type ProductImage = {
  fa: string;
  en: string;
  value: string;
  url: string;
};

export type ProductImages = ProductImage[];

export type OnSelect = (index: number) => void;

export interface CurrentColorProps {
  activeImage: ProductImage;
}

export interface ColorCirclesProps {
  colors: string[];
  activeIndex: number;
  onSelect: OnSelect;
}

export interface ImageSwiperProps {
  images: ProductImages;
  swiperRef: RefObject<SwiperType | null>;
  onSelect: OnSelect;
  onOpenModal: () => void;
}

export interface ImageThumbnailsProps {
  images: ProductImages;
  onSelect: OnSelect;
  activeIndex: number;
}

export interface ImageModalProps {
  images: ProductImages;
  activeIndex: number;
  onOpenChange: () => void;
  isOpen: boolean;
  swiperRef: RefObject<SwiperType | null>;
  onSelect: OnSelect;
}

export interface SlideCounterProps {
  currentSlide: number;
  totalImages: number;
  isModal?: boolean;
}
