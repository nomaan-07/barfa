import { Colors } from "@/app/_utils/types";
import clsx from "clsx";

interface CardColorCirclesProps {
  colors: Colors;
  variant: "mobile" | "desktop";
}

// FIXME: + for colors more than 4

function CardColorCircles({ colors, variant }: CardColorCirclesProps) {
  return (
    <div
      className={clsx("flex gap-1", variant === "mobile" && "justify-center")}
    >
      {colors.map((color) => (
        <div
          key={color.en}
          className={clsx("border-default-300 rounded-full border", {
            "size-2.5": variant === "desktop",
            "size-2": variant === "mobile",
          })}
          style={{ backgroundColor: color.value }}
        ></div>
      ))}
    </div>
  );
}

export default CardColorCircles;
