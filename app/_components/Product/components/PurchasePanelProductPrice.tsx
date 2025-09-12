import {
  selectorProductTotalOriginalPrice,
  selectorTotalFinalPrice,
  useProductStore,
} from "@/app/_store/productStore";
import ProductPrice from "../../Common/ProductPrice";

function PurchasePanelProductPrice() {
  const discountPercent = useProductStore((state) => state.discount_percent);
  const totalOriginalPrice = useProductStore(selectorProductTotalOriginalPrice);
  const totalFinalPrice = useProductStore(selectorTotalFinalPrice);

  return (
    <ProductPrice
      discountPercent={discountPercent}
      originalPrice={totalOriginalPrice}
      finalPrice={totalFinalPrice}
    />
  );
}

export default PurchasePanelProductPrice;
