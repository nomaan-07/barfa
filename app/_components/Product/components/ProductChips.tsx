"use client";

import { useProductsStore } from "@/app/_store/productStore";
import { LOW_PRODUCT_QUANTITY } from "@/app/_utils/constants";
import { convertToPersian } from "@/app/_utils/helper";
import { Chip } from "@heroui/chip";
import clsx from "clsx";
import {
  LucideAlertTriangle,
  LucideGift,
  LucideShieldCheck,
} from "lucide-react";

interface ProductChipsProps {
  variant: "mobile" | "desktop";
}

function ProductChips({ variant }: ProductChipsProps) {
  const discountPercent = useProductsStore((state) => state.discountPercent);
  const warranty = useProductsStore((state) => state.warranty);
  const quantity = useProductsStore((state) => state.quantity);

  const chipSize = variant === "mobile" ? "sm" : "lg";
  const iconSize = variant === "mobile" ? 16 : 24;

  return (
    <div
      className={clsx("w-full flex-wrap gap-2 lg:justify-between", {
        "flex lg:hidden": variant === "mobile",
        "hidden lg:flex": variant === "desktop",
      })}
    >
      {discountPercent > 0 && (
        <Chip
          color="danger"
          variant="flat"
          size={chipSize}
          startContent={<LucideGift size={iconSize} />}
        >
          <span>پیشنهاد ویژه</span>
        </Chip>
      )}

      <Chip
        color="success"
        variant="flat"
        size={chipSize}
        startContent={<LucideShieldCheck size={iconSize} />}
      >
        {warranty}
      </Chip>

      {quantity <= LOW_PRODUCT_QUANTITY && variant === "mobile" && (
        <Chip
          color="warning"
          variant="flat"
          size={chipSize}
          startContent={<LucideAlertTriangle size={iconSize} />}
        >
          {convertToPersian(quantity)} عدد در انبار باقی مانده
        </Chip>
      )}
    </div>
  );
}

export default ProductChips;
