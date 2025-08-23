import { convertToPersian } from "@/app/_utils/helper";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { LucideMinus, LucidePlus } from "lucide-react";
import { useState } from "react";

interface QuantitySelectorProps {
  maxQuantity: number;
}

function QuantitySelector({ maxQuantity }: QuantitySelectorProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const isIncreaseForbidden = selectedQuantity >= maxQuantity;

  const increaseQuantity = () => setSelectedQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setSelectedQuantity((prev) => prev - 1);

  return (
    <Card className="shrink-0" shadow="sm">
      <CardBody>
        <div className="flex h-11 w-36 items-center justify-between">
          <Button
            isIconOnly
            variant="light"
            color="success"
            onPress={increaseQuantity}
            isDisabled={isIncreaseForbidden}
          >
            <LucidePlus className="size-5" />
          </Button>
          <div className="flex flex-col items-center select-none">
            <span>{convertToPersian(selectedQuantity)}</span>
            {isIncreaseForbidden && (
              <span className="text-default-400 text-sm">حداکثر</span>
            )}
          </div>
          <Button
            isIconOnly
            variant="light"
            color="danger"
            onPress={decreaseQuantity}
            isDisabled={selectedQuantity <= 1}
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
