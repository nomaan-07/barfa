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
        "decoration-default-400 text-default-400 self-end text-sm line-through",
        {
          "sm:text-lg": variant === "panel",
          "ml-8": variant === "card",
        },
      )}
    >
      {convertToPersian(price)}
    </div>
  );
}

export default OriginalPrice;
