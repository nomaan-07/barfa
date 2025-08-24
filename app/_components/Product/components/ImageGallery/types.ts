import { RefObject } from "react";
import { Swiper as SwiperType } from "swiper";

export type OnSelect = (index: number) => void;

export interface ProductColorCirclesProps {
  onSelect: OnSelect;
}

export interface ImageSwiperProps {
  swiperRef: RefObject<SwiperType | null>;
  onSelect: OnSelect;
  onOpenModal: () => void;
}

export interface ImageThumbnailsProps {
  onSelect: OnSelect;
}

export interface ImageModalProps {
  onOpenChange: () => void;
  isOpen: boolean;
  swiperRef: RefObject<SwiperType | null>;
  onSelect: OnSelect;
}

export interface SlideCounterProps {
  isModal?: boolean;
}
