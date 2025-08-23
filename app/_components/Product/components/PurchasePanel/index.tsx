import AddToCartButton from "@/app/_components/Common/AddToCartButton";
import QuantityText from "@/app/_components/Common/QuantityText";
import { LOW_PRODUCT_QUANTITY } from "@/app/_utils/constants";
import { ProductType } from "@/app/_utils/types";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import clsx from "clsx";
import Insurance from "./components/Insurance";
import ProductPanelHeaderChips from "./components/ProductPanelHeaderChips";
import ProductPanelPrice from "./components/ProductPanelPrice";
import QuantitySelector from "./components/QuantitySelector";

interface PurchasePanelProps {
  product: ProductType;
}

function PurchasePanel({ product }: PurchasePanelProps) {
  const {
    discounted_price: discountedPrice,
    insurance,
    warranty,
    quantity,
    discount_percent: discountPercent,
    price,
  } = product;

  const hasDiscount = discountedPrice > 0;

  return (
    <Card className="hidden lg:sticky lg:top-4 lg:z-30 lg:block">
      <CardHeader>
        <ProductPanelHeaderChips
          hasDiscount={hasDiscount}
          warranty={warranty}
        />
      </CardHeader>

      <CardBody className="space-y-6">
        <Insurance discountedPrice={discountPercent} insurance={insurance} />

        <div className="flex items-center justify-between">
          <QuantitySelector maxQuantity={quantity} />
          <ProductPanelPrice
            discountPercent={discountPercent}
            discountedPrice={discountedPrice}
            price={price}
          />
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
