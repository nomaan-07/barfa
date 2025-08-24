"use client";

import { useProductsStore } from "@/app/_store/productStore";
import { Chip } from "@heroui/chip";
import { LucideGift, LucideShieldCheck } from "lucide-react";

function ProductPanelHeaderChips() {
  const discountPercent = useProductsStore((state) => state.discountPercent);
  const warranty = useProductsStore((state) => state.warranty);

  return (
    <div className="flex w-full flex-wrap justify-between gap-2">
      {discountPercent > 0 && (
        <Chip
          color="danger"
          variant="flat"
          size="lg"
          startContent={<LucideGift />}
        >
          <span>پیشنهاد ویژه</span>
        </Chip>
      )}

      <Chip
        color="success"
        variant="flat"
        size="lg"
        startContent={<LucideShieldCheck />}
      >
        {warranty}
      </Chip>
    </div>
  );
}

export default ProductPanelHeaderChips;
