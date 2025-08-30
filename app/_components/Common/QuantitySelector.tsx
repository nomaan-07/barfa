import { convertToPersian } from "@/app/_utils/helper";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { LucideMinus, LucidePlus, LucideTrash2 } from "lucide-react";

interface QuantitySelectorProps {
  selectedQuantity: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  allowRemove?: boolean;
}

function QuantitySelector({
  selectedQuantity,
  quantity,
  onIncrease,
  onDecrease,
  allowRemove,
}: QuantitySelectorProps) {
  const isIncreaseDisabled = quantity === selectedQuantity;
  const isDecreaseDisabled = !allowRemove && selectedQuantity === 1;

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
            onPress={onIncrease}
            isDisabled={isIncreaseDisabled}
            className={buttonStyles}
          >
            <LucidePlus className={iconStyles} />
          </Button>
          <div className="flex flex-col items-center select-none">
            <span>{convertToPersian(selectedQuantity)}</span>
            {isIncreaseDisabled && (
              <span className="text-default-400 text-xs sm:text-sm">
                حداکثر
              </span>
            )}
          </div>
          <Button
            isIconOnly
            variant="light"
            color="danger"
            onPress={onDecrease}
            isDisabled={isDecreaseDisabled}
            className={buttonStyles}
          >
            {allowRemove && selectedQuantity === 1 ? (
              <LucideTrash2 className={iconStyles} />
            ) : (
              <LucideMinus className={iconStyles} />
            )}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default QuantitySelector;
