import { Chip } from "@heroui/chip";
import clsx from "clsx";
import { LucideGift, LucideShieldCheck } from "lucide-react";

interface ProductBadgesProps {
  discountPercent: number;
  size: "sm" | "lg";
  warranty: string;
}
function ProductBadges({
  discountPercent,
  size,
  warranty,
}: ProductBadgesProps) {
  const iconSize = size === "sm" ? 16 : 24;

  return (
    <div
      className={clsx(
        "flex w-full flex-wrap gap-2",
        discountPercent > 0 ? "justify-between" : "justify-end",
      )}
    >
      {discountPercent > 0 && (
        <Chip
          color="danger"
          variant="flat"
          size={size}
          startContent={<LucideGift size={iconSize} />}
        >
          <span>پیشنهاد ویژه</span>
        </Chip>
      )}
      <Chip
        color="success"
        variant="flat"
        size={size}
        startContent={<LucideShieldCheck size={iconSize} />}
      >
        {warranty}
      </Chip>
    </div>
  );
}

export default ProductBadges;
