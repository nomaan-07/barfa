"use client";

import QuantityText from "@/app/_components/Common/QuantityText";
import AddToCartButton from "@/app/_components/Product/components/AddToCartButton";
import { useProductsStore } from "@/app/_store/productStore";
import { LOW_PRODUCT_QUANTITY } from "@/app/_utils/constants";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import clsx from "clsx";
import FinishedPanel from "./FinishedPanel";
import Insurance from "./Insurance";
import ProductChips from "./ProductChips";
import ProductPrice from "./ProductPrice";
import QuantitySelector from "./QuantitySelector";

function DesktopPurchasePanel() {
  const quantity = useProductsStore((state) => state.quantity);

  if (quantity === 0) return <FinishedPanel />;

  return (
    <Card className="hidden lg:block">
      <CardHeader>
        <ProductChips variant="desktop" />
      </CardHeader>

      <CardBody className="space-y-6">
        <Insurance />

        <div className="flex items-center justify-between">
          <QuantitySelector />
          <ProductPrice />
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

export default DesktopPurchasePanel;
