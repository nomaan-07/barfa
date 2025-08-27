import { Colors } from "@/app/_utils/types";
import clsx from "clsx";
import { LucidePlus } from "lucide-react";

interface CardColorCirclesProps {
  colors: Colors;
  variant: "mobile" | "desktop";
}

function CardColorCircles({ colors, variant }: CardColorCirclesProps) {
  return (
    <div
      className={clsx("flex gap-1", variant === "mobile" && "justify-center")}
    >
      {colors.slice(0, 4).map((color) => (
        <div
          key={color.en}
          className={clsx("border-default-300 rounded-full border", {
            "size-2.5": variant === "desktop",
            "size-2": variant === "mobile",
          })}
          style={{ backgroundColor: color.value }}
        ></div>
      ))}

      {colors.length > 4 && <LucidePlus className="size-2.5" />}
    </div>
  );
}

export default CardColorCircles;
