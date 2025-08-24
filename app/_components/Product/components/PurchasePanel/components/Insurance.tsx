import { useProductsStore } from "@/app/_store/productStore";
import { convertToPersian } from "@/app/_utils/helper";
import { Card, CardBody } from "@heroui/card";
import { Checkbox } from "@heroui/checkbox";
import clsx from "clsx";

function Insurance() {
  const insurancePrice = useProductsStore((state) => state.insurancePrice);
  const insuranceTitle = useProductsStore((state) => state.insurance.title);
  const hasInsurance = useProductsStore((state) => state.hasInsurance);
  const toggleInsurance = useProductsStore((state) => state.toggleInsurance);

  return (
    <Card shadow="sm" className={clsx(hasInsurance && "bg-primary-50")}>
      <CardBody>
        <div className="divide-default-300 flex items-center justify-between gap-4 divide-x text-right">
          <Checkbox isSelected={hasInsurance} onValueChange={toggleInsurance}>
            {insuranceTitle}
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
