import { convertToPersian } from "@/app/_utils/helper";
import { Card, CardBody } from "@heroui/card";
import { Checkbox } from "@heroui/checkbox";
import clsx from "clsx";

interface InsuranceProps {
  quantity: number;
  hasInsurance: boolean;
  onClick: () => void;
  title: string;
  price: number;
}

function Insurance({
  quantity,
  hasInsurance,
  onClick,
  title,
  price,
}: InsuranceProps) {
  if (quantity === 0) return null;

  return (
    <Card
      shadow="sm"
      className={clsx("w-full md:cursor-pointer", {
        "bg-primary-50": hasInsurance,
      })}
    >
      <CardBody className="text-right">
        <div
          onClick={onClick}
          className="divide-default-200 flex flex-col justify-between gap-2 overflow-hidden sm:flex-row sm:items-center sm:gap-4 sm:divide-x"
        >
          <Checkbox
            aria-label={title}
            onValueChange={onClick}
            isSelected={hasInsurance}
            classNames={{
              label: "text-sm sm:text-base",
            }}
          >
            {title}
          </Checkbox>
          <div className="flex items-center justify-end gap-1">
            <span className="text-sm font-semibold sm:text-lg">
              {convertToPersian(price)}
            </span>
            <span className="text-xs sm:text-sm">تومان</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default Insurance;
