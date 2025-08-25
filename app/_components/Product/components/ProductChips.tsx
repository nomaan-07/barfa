"use client";

import { useProductsStore } from "@/app/_store/productStore";
import { Chip } from "@heroui/chip";
import clsx from "clsx";
import { LucideGift, LucideShieldCheck } from "lucide-react";

interface ProductChipsProps {
  variant: "mobile" | "desktop";
}

function ProductChips({ variant }: ProductChipsProps) {
  const discountPercent = useProductsStore((state) => state.discountPercent);
  const warranty = useProductsStore((state) => state.warranty);

  const chipSize = variant === "mobile" ? "sm" : "lg";
  const iconSize = variant === "mobile" ? 16 : 24;

  return (
    <div
      className={clsx("w-full flex-wrap justify-between gap-2", {
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
    </div>
  );
}

export default ProductChips;
