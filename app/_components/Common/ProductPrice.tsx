import DiscountBadge from "./DiscountBadge";
import FinalPrice from "./FinalPrice";
import OriginalPrice from "./OriginalPrice";

interface ProductPriceProps {
  discountPercent: number;
  originalPrice: number;
  finalPrice: number;
}

function ProductPrice({
  discountPercent,
  originalPrice,
  finalPrice,
}: ProductPriceProps) {
  return (
    <div>
      {discountPercent > 0 && (
        <div className="flex gap-4">
          <OriginalPrice variant="panel" price={originalPrice} />
          <DiscountBadge discountPercent={discountPercent} />
        </div>
      )}
      <FinalPrice variant="panel" price={finalPrice} />
    </div>
  );
}

export default ProductPrice;
