import {
  selectorTotalFinalPrice,
  selectorTotalOriginalPrice,
  useProductsStore,
} from "@/app/_store/productStore";
import ProductPrice from "../../Common/ProductPrice";

function PurchasePanelProductPrice() {
  const discountPercent = useProductsStore((state) => state.discount_percent);
  const totalOriginalPrice = useProductsStore(selectorTotalOriginalPrice);
  const totalFinalPrice = useProductsStore(selectorTotalFinalPrice);

  return (
    <ProductPrice
      discountPercent={discountPercent}
      originalPrice={totalOriginalPrice}
      finalPrice={totalFinalPrice}
    />
  );
}

export default PurchasePanelProductPrice;
