import { convertToPersian } from "@/app/_utils/helper";

interface DiscountBadgeProps {
  discountPercent: number;
}

function DiscountBadge({ discountPercent }: DiscountBadgeProps) {
  return (
    <div className="bg-danger ml-auto rounded-md px-1 text-sm text-white">
      {convertToPersian(discountPercent)}٪
    </div>
  );
}

export default DiscountBadge;
