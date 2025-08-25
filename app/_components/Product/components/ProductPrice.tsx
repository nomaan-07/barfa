import DiscountBadge from "@/app/_components/Common/DiscountBadge";
import FinalPrice from "@/app/_components/Common/FinalPrice";
import OriginalPrice from "@/app/_components/Common/OriginalPrice";
import {
  selectorTotalFinalPrice,
  selectorTotalOriginalPrice,
  useProductsStore,
} from "@/app/_store/productStore";

function ProductPrice() {
  const discountPercent = useProductsStore((state) => state.discount_percent);
  const totalOriginalPrice = useProductsStore(selectorTotalOriginalPrice);
  const totalFinalPrice = useProductsStore(selectorTotalFinalPrice);

  return (
    <div>
      {discountPercent > 0 && (
        <div className="flex gap-4">
          <OriginalPrice variant="panel" price={totalOriginalPrice} />
          <DiscountBadge discountPercent={discountPercent} />
        </div>
      )}
      <FinalPrice variant="panel" price={totalFinalPrice} />
    </div>
  );
}

export default ProductPrice;
