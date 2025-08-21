import { convertToPersian } from "@/app/_utils/helper";
import clsx from "clsx";

interface CardDiscountBadgeProps {
  discountPercent: number;
  className?: string;
}

function CardDiscountBadge({
  discountPercent,
  className = "",
}: CardDiscountBadgeProps) {
  return (
    <div
      className={clsx(
        "bg-danger ml-auto rounded-md px-1 text-sm text-white",
        className,
      )}
    >
      {convertToPersian(discountPercent)}٪
    </div>
  );
}

export default CardDiscountBadge;
