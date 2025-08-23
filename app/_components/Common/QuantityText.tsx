import { LOW_PRODUCT_QUANTITY } from "@/app/_utils/constants";
import { convertToPersian } from "@/app/_utils/helper";
import { Chip } from "@heroui/chip";
import clsx from "clsx";

interface QuantityTextProps {
  quantity: number;
  variant: "card" | "panel";
}

function QuantityText({ quantity, variant }: QuantityTextProps) {
  if (quantity === 0 && variant === "card")
    return (
      <div className="mt-6 flex items-center gap-2">
        <div className="bg-default-300 h-px w-full rounded-full"></div>
        <p className="text-default-500 text-center text-lg font-semibold">
          ناموجود
        </p>
        <div className="bg-default-300 h-px w-full rounded-full"></div>
      </div>
    );

  if (quantity <= LOW_PRODUCT_QUANTITY)
    return (
      <>
        {variant === "card" && (
          <p className={clsx("text-danger w-full text-xs")}>
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
