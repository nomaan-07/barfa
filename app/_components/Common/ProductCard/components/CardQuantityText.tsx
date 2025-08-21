interface CardQuantityTextProps {
  quantity: number;
}

function CardQuantityText({ quantity }: CardQuantityTextProps) {
  if (quantity === 0)
    return (
      <div className="mt-6 flex items-center gap-2">
        <div className="bg-default-300 h-px w-full rounded-full"></div>
        <p className="text-default-500 text-center text-lg font-semibold">
          ناموجود
        </p>
        <div className="bg-default-300 h-px w-full rounded-full"></div>
      </div>
    );

  if (quantity <= 3)
    return (
      <p className="text-danger w-full text-xs">
        {quantity} عدد در انبار باقی مانده
      </p>
    );

  return null;
}

export default CardQuantityText;
