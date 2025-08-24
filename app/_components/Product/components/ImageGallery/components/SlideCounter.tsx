import {
  selectorActiveIndex,
  useProductsStore,
} from "@/app/_store/productStore";
import { convertToPersian } from "@/app/_utils/helper";
import { Chip } from "@heroui/chip";
import clsx from "clsx";
import { LucideImage } from "lucide-react";
import { SlideCounterProps } from "../types";

function SlideCounter({ isModal }: SlideCounterProps) {
  const currentSlide = useProductsStore(selectorActiveIndex) + 1;
  const totalImages = useProductsStore((state) => state.galleryImages).length;

  const IconClasses = clsx(isModal ? "size-5" : "size-4");

  return (
    <Chip
      size={isModal ? "md" : "sm"}
      startContent={<LucideImage className={IconClasses} />}
      className={clsx("absolute z-10 bg-black/50 text-white select-none", {
        "bottom-2 left-2": isModal,
        "top-0 left-0 lg:hidden": !isModal,
      })}
    >
      {convertToPersian(currentSlide)} از {convertToPersian(totalImages)}
    </Chip>
  );
}

export default SlideCounter;
