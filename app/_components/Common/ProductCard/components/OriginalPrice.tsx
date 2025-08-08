import { convertToPersian } from "@/app/_utils/helper";

interface OriginalPriceProps {
  price: number;
}

function OriginalPrice({ price }: OriginalPriceProps) {
  return (
    <div className="decoration-default-400 text-default-400 mr-auto self-end line-through">
      {convertToPersian(price)}
    </div>
  );
}

export default OriginalPrice;
