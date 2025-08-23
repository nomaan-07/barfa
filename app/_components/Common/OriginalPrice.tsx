import { convertToPersian } from "@/app/_utils/helper";
import clsx from "clsx";

interface OriginalPriceProps {
  price: number;
  variant: "panel" | "card";
}

function OriginalPrice({ price, variant }: OriginalPriceProps) {
  return (
    <div
      className={clsx(
        "decoration-default-400 text-default-400 mr-auto self-end line-through",
        {
          "text-sm": variant === "card",
          "text-lg": variant === "panel",
        },
      )}
    >
      {convertToPersian(price)}
    </div>
  );
}

export default OriginalPrice;
