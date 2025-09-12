"use client";

import AddToCartButton from "@/app/_components/Product/components/AddToCartButton";
import { useProductStore } from "@/app/_store/productStore";
import { LOW_PRODUCT_QUANTITY } from "@/app/_utils/constants";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import clsx from "clsx";
import QuantityText from "../../Common/QuantityText";
import ProductInsurance from "./ProductInsurance";
import PurchasePanelBadges from "./PurchasePanelBadges";
import PurchasePanelProductPrice from "./PurchasePanelProductPrice";
import PurchasePanelQuantitySelector from "./PurchasePanelQuantitySelector";

function DesktopPurchasePanel() {
  const quantity = useProductStore((state) => state.quantity);

  return (
    <Card className="hidden lg:block">
      <CardHeader>
        <PurchasePanelBadges size="lg" />
      </CardHeader>

      <CardBody className="space-y-6">
        <ProductInsurance />

        <div className="flex items-center justify-between">
          <PurchasePanelQuantitySelector />
          <PurchasePanelProductPrice />
        </div>
      </CardBody>

      <CardFooter
        className={clsx(
          "gap-2",
          quantity <= LOW_PRODUCT_QUANTITY ? "justify-between" : "justify-end",
        )}
      >
        <QuantityText variant="chip" quantity={quantity} />
        <AddToCartButton className="w-1/2" />
      </CardFooter>
    </Card>
  );
}

export default DesktopPurchasePanel;
