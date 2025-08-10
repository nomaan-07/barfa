import { convertToPersian } from "@/app/_utils/helper";
import clsx from "clsx";

interface DiscountBadgeProps {
  discountPercent: number;
  className?: string;
}

function DiscountBadge({
  discountPercent,
  className = "",
}: DiscountBadgeProps) {
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

export default DiscountBadge;
