import clsx from "clsx";
import { ProductColorCirclesProps } from "../types";

function ProductColorCircles({
  colors,
  activeIndex,
  onSelect,
}: ProductColorCirclesProps) {
  return (
    <div className="flex max-h-120 flex-wrap gap-2 lg:absolute lg:top-1 lg:right-1 lg:z-10 lg:flex-col">
      {colors.map((color, index) => (
        <button
          key={index}
          className={clsx("size-6 cursor-pointer rounded-full", {
            "ring-primary ring-1 ring-offset-2": activeIndex === index,
            "border-default-300 border-1": activeIndex !== index,
          })}
          style={{ backgroundColor: color }}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}

export default ProductColorCircles;
