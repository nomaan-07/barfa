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

  const iconStyles = "size-4 sm:size-5";
  const buttonStyles = "min-w-8 size-8 sm:size-10";

  return (
    <Card className="shrink-0" shadow="sm">
      <CardBody>
        <div className="flex h-10 w-28 items-center justify-between sm:h-11 sm:w-36">
          <Button
            isIconOnly
            variant="light"
            color="success"
            onPress={increaseQuantity}
            isDisabled={!canIncreaseQuantity}
            className={buttonStyles}
          >
            <LucidePlus className={iconStyles} />
          </Button>
          <div className="flex flex-col items-center select-none">
            <span>{convertToPersian(selectedQuantity)}</span>
            {!canIncreaseQuantity && (
              <span className="text-default-400 text-xs sm:text-sm">
                حداکثر
              </span>
            )}
          </div>
          <Button
            isIconOnly
            variant="light"
            color="danger"
            onPress={decreaseQuantity}
            isDisabled={!canDecreaseQuantity}
            className={buttonStyles}
          >
            {/* <LucideTrash2 className={iconStyles}/> */}
            <LucideMinus className={iconStyles} />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default QuantitySelector;
