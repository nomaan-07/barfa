import { convertToPersian } from "@/app/_utils/helper";

interface CardFinalPriceProps {
  price: number;
}

function CardFinalPrice({ price }: CardFinalPriceProps) {
  const convertedPrice = convertToPersian(price);

  return (
    <div className="font-medium">
      <span className="text-lg">{convertedPrice}</span>
      <span className="mr-0.5 text-xs">تومان</span>
    </div>
  );
}

export default CardFinalPrice;
