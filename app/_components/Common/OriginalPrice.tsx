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
        "decoration-default-400 text-default-400 mr-auto self-end text-sm line-through",
        variant === "panel" && "sm:text-lg",
      )}
    >
      {convertToPersian(price)}
    </div>
  );
}

export default OriginalPrice;
