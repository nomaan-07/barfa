import {
  selectorActiveIndex,
  useProductStore,
} from "@/app/_store/productStore";
import clsx from "clsx";
import { ProductColorCirclesProps } from "../types";

function ProductColorCircles({ onSelect }: ProductColorCirclesProps) {
  const activeIndex = useProductStore(selectorActiveIndex);
  const images = useProductStore((state) => state.galleryImages);

  return (
    <div className="mb-2 flex max-h-120 flex-wrap gap-2 lg:absolute lg:top-1 lg:right-1 lg:z-10 lg:mb-0 lg:flex-col">
      {images.map((image, index) => (
        <button
          key={index}
          className={clsx("size-6 cursor-pointer rounded-full", {
            "ring-primary ring-1 ring-offset-2": activeIndex === index,
            "border-default-300 border-1": activeIndex !== index,
          })}
          style={{ backgroundColor: image.value }}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}

export default ProductColorCircles;
