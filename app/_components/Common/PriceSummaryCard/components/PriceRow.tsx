import clsx from "clsx";
import FinalPrice from "../../FinalPrice";

interface PriceRowProps {
  price: number;
  title: string;
  isBordered?: boolean;
}

function PriceRow({ price, title, isBordered }: PriceRowProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-between sm:block sm:space-y-2 lg:flex lg:space-y-0",
        isBordered &&
          "border-b-default-200 border-b pb-4 sm:border-b-0 sm:pb-0 lg:border-b lg:pb-4",
      )}
    >
      <div className="text-default-500 text-sm">{title}</div>
      <FinalPrice price={price} variant="panel" />
    </div>
  );
}

export default PriceRow;
