"use client";

import { useProductsStore } from "@/app/_store/productStore";
import ProductBadges from "../../Common/ProductBadges";

interface PurchasePanelBadgesProps {
  size: "sm" | "lg";
}

function PurchasePanelBadges({ size }: PurchasePanelBadgesProps) {
  const discountPercent = useProductsStore((state) => state.discount_percent);
  const warranty = useProductsStore((state) => state.warranty);

  return (
    <ProductBadges
      discountPercent={discountPercent}
      size={size}
      warranty={warranty}
    />
  );
}

export default PurchasePanelBadges;
