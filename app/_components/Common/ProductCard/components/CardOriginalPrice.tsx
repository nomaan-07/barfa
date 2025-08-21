import { convertToPersian } from "@/app/_utils/helper";

interface CardOriginalPriceProps {
  price: number;
}

function CardOriginalPrice({ price }: CardOriginalPriceProps) {
  return (
    <div className="decoration-default-400 text-default-400 mr-auto self-end line-through">
      {convertToPersian(price)}
    </div>
  );
}

export default CardOriginalPrice;
