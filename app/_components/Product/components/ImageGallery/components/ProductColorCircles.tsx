import clsx from "clsx";
import { ProductColorCirclesProps } from "../types";

function ProductColorCircles({
  colors,
  activeIndex,
  onSelect,
}: ProductColorCirclesProps) {
  return (
    <div className="absolute top-1 right-1 z-10 hidden flex-col gap-2 lg:flex">
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
