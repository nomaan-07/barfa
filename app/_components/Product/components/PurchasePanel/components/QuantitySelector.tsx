import { useProductsStore } from "@/app/_store/productStore";
import { convertToPersian } from "@/app/_utils/helper";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { LucideMinus, LucidePlus } from "lucide-react";

function QuantitySelector() {
  const quantity = useProductsStore((state) => state.quantity);
  const selectedQuantity = useProductsStore((state) => state.selectedQuantity);
  const increaseQuantity = useProductsStore((state) => state.increaseQuantity);
  const decreaseQuantity = useProductsStore((state) => state.decreaseQuantity);

  const canIncreaseQuantity = quantity > selectedQuantity;
  const canDecreaseQuantity = selectedQuantity > 1;

  return (
    <Card className="shrink-0" shadow="sm">
      <CardBody>
        <div className="flex h-11 w-36 items-center justify-between">
          <Button
            isIconOnly
            variant="light"
            color="success"
            onPress={increaseQuantity}
            isDisabled={!canIncreaseQuantity}
          >
            <LucidePlus className="size-5" />
          </Button>
          <div className="flex flex-col items-center select-none">
            <span>{convertToPersian(selectedQuantity)}</span>
            {!canIncreaseQuantity && (
              <span className="text-default-400 text-sm">حداکثر</span>
            )}
          </div>
          <Button
            isIconOnly
            variant="light"
            color="danger"
            onPress={decreaseQuantity}
            isDisabled={!canDecreaseQuantity}
          >
            {/* <LucideTrash2 className="size-5" /> */}
            <LucideMinus className="size-5" />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default QuantitySelector;
