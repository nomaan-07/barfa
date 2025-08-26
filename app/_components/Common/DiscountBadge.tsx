import { convertToPersian } from "@/app/_utils/helper";
import { Chip } from "@heroui/react";
import clsx from "clsx";

interface DiscountBadgeProps {
  discountPercent: number;
  isAbsolute?: boolean;
}

function DiscountBadge({ discountPercent, isAbsolute }: DiscountBadgeProps) {
  return (
    <Chip
      color="danger"
      size="sm"
      className={clsx(
        "ml-auto h-fit sm:text-sm",
        isAbsolute && "absolute top-2 left-2",
      )}
    >
      {convertToPersian(discountPercent)}٪
    </Chip>
  );
}

export default DiscountBadge;
