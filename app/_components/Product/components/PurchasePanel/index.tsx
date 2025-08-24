"use client";

import AddToCartButton from "@/app/_components/Common/AddToCartButton";
import QuantityText from "@/app/_components/Common/QuantityText";
import { useProductsStore } from "@/app/_store/productStore";
import { LOW_PRODUCT_QUANTITY } from "@/app/_utils/constants";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import clsx from "clsx";
import Insurance from "./components/Insurance";
import ProductPanelHeaderChips from "./components/ProductPanelHeaderChips";
import ProductPanelPrice from "./components/ProductPanelPrice";
import QuantitySelector from "./components/QuantitySelector";

function PurchasePanel() {
  const quantity = useProductsStore((state) => state.quantity);

  return (
    <Card className="hidden lg:sticky lg:top-4 lg:z-30 lg:block">
      <CardHeader>
        <ProductPanelHeaderChips />
      </CardHeader>

      <CardBody className="space-y-6">
        <Insurance />

        <div className="flex items-center justify-between">
          <QuantitySelector />
          <ProductPanelPrice />
        </div>
      </CardBody>

      <CardFooter
        className={clsx(
          "gap-2",
          quantity <= LOW_PRODUCT_QUANTITY ? "justify-between" : "justify-end",
        )}
      >
        <QuantityText variant="panel" quantity={quantity} />
        <AddToCartButton className="w-1/2" />
      </CardFooter>
    </Card>
  );
}

export default PurchasePanel;
