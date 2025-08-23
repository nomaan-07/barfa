import { convertToPersian } from "@/app/_utils/helper";
import clsx from "clsx";

interface FinalPriceProps {
  price: number;
  variant: "panel" | "card";
}

function FinalPrice({ price, variant }: FinalPriceProps) {
  const convertedPrice = convertToPersian(price);

  return (
    <div className="flex items-center gap-1">
      <span
        className={clsx("font-bold", {
          "text-lg": variant === "card",
          "text-xl": variant === "panel",
        })}
      >
        {convertedPrice}
      </span>
      <span className="text-xs font-medium">تومان</span>
    </div>
  );
}

export default FinalPrice;
