interface FinalPriceProps {
  price: string;
}

function FinalPrice({ price }: FinalPriceProps) {
  return (
    <div className="font-medium">
      <span className="text-lg">{price}</span>
      <span className="mr-0.5 text-xs">تومان</span>
    </div>
  );
}

export default FinalPrice;
