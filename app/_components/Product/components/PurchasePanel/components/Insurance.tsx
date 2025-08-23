import { convertToPersian } from "@/app/_utils/helper";
import { InsuranceType } from "@/app/_utils/types";
import { Card, CardBody } from "@heroui/card";
import { Checkbox } from "@heroui/checkbox";
import clsx from "clsx";
import { useState } from "react";

interface InsuranceProps {
  insurance: InsuranceType;
  discountedPrice: number;
}

function Insurance({ insurance, discountedPrice }: InsuranceProps) {
  const [isInsuranceSelected, setIsInsuranceSelected] = useState(false);

  const insurancePrice = insurance.price
    ? insurance.price
    : insurance.percent
      ? (insurance.percent / 100) * discountedPrice
      : 0;

  return (
    <Card shadow="sm" className={clsx(isInsuranceSelected && "bg-primary-50")}>
      <CardBody>
        <div className="divide-default-300 flex items-center justify-between gap-4 divide-x text-right">
          <Checkbox
            isSelected={isInsuranceSelected}
            onValueChange={setIsInsuranceSelected}
          >
            {insurance.title}
          </Checkbox>
          <div>
            <span className="ml-1 text-lg font-semibold">
              {convertToPersian(insurancePrice)}
            </span>
            <span className="text-sm">تومان</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default Insurance;
