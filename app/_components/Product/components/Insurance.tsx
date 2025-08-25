import { useProductsStore } from "@/app/_store/productStore";
import { convertToPersian } from "@/app/_utils/helper";
import { Card, CardBody } from "@heroui/card";
import { Checkbox } from "@heroui/checkbox";
import clsx from "clsx";

interface InsuranceProps {
  variant: "mobile" | "desktop";
}

function Insurance({ variant }: InsuranceProps) {
  const insurancePrice = useProductsStore((state) => state.insurancePrice);
  const insuranceTitle = useProductsStore((state) => state.insurance.title);
  const hasInsurance = useProductsStore((state) => state.hasInsurance);
  const quantity = useProductsStore((state) => state.quantity);
  const toggleInsurance = useProductsStore((state) => state.toggleInsurance);

  if (quantity === 0) return null;

  return (
    <Card
      shadow="sm"
      className={clsx("w-full md:cursor-pointer", {
        "hidden lg:block": variant === "desktop",
        "lg:hidden": variant === "mobile",
        "bg-primary-50": hasInsurance,
      })}
    >
      <CardBody className="text-right">
        <div
          onClick={toggleInsurance}
          className="divide-default-200 flex flex-col justify-between gap-2 overflow-hidden sm:flex-row sm:items-center sm:gap-4 sm:divide-x"
        >
          <Checkbox
            aria-label={insuranceTitle}
            onValueChange={toggleInsurance}
            isSelected={hasInsurance}
            classNames={{
              label: "text-sm sm:text-base",
            }}
          >
            {insuranceTitle}
          </Checkbox>
          <div className="flex items-center justify-end gap-1">
            <span className="text-sm font-semibold sm:text-lg">
              {convertToPersian(insurancePrice)}
            </span>
            <span className="text-xs sm:text-sm">تومان</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default Insurance;
