import DiscountBadge from "@/app/_components/Common/DiscountBadge";
import FinalPrice from "@/app/_components/Common/FinalPrice";
import OriginalPrice from "@/app/_components/Common/OriginalPrice";

interface ProductPanelPriceProps {
  price: number;
  discountPercent: number;
  discountedPrice: number;
}

function ProductPanelPrice({
  price,
  discountPercent,
  discountedPrice,
}: ProductPanelPriceProps) {
  return (
    <div>
      {discountPercent > 0 && (
        <div className="flex gap-4">
          <OriginalPrice variant="panel" price={price} />
          <DiscountBadge discountPercent={discountPercent} />
        </div>
      )}
      <FinalPrice variant="panel" price={discountedPrice} />
    </div>
  );
}

export default ProductPanelPrice;
