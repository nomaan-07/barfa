import { LOW_PRODUCT_QUANTITY } from "@/app/_utils/constants";
import { convertToPersian } from "@/app/_utils/helper";
import { Chip } from "@heroui/chip";

interface QuantityTextProps {
  quantity: number;
  variant: "card" | "panel";
}

function QuantityText({ quantity, variant }: QuantityTextProps) {
  if (quantity === 0 && variant === "card")
    return (
      <div className="flex items-center gap-2 sm:mt-2 sm:mb-4">
        <div className="bg-default-300 h-px w-full rounded-full"></div>
        <p className="text-default-500 text-center font-semibold sm:text-lg">
          ناموجود
        </p>
        <div className="bg-default-300 h-px w-full rounded-full"></div>
      </div>
    );

  if (quantity <= LOW_PRODUCT_QUANTITY)
    return (
      <>
        {variant === "card" && (
          <p className="text-danger h-4 w-full text-xs">
            {convertToPersian(quantity)} عدد در انبار باقی مانده
          </p>
        )}
        {variant === "panel" && (
          <Chip color="danger">
            {convertToPersian(quantity)} عدد در انبار باقی مانده
          </Chip>
        )}
      </>
    );

  return null;
}

export default QuantityText;
