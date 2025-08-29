import { useProductsStore } from "@/app/_store/productStore";
import QuantitySelector from "../../Common/QuantitySelector";

function PurchasePanelQuantitySelector() {
  const quantity = useProductsStore((state) => state.quantity);
  const selectedQuantity = useProductsStore((state) => state.selectedQuantity);
  const increaseQuantity = useProductsStore((state) => state.increaseQuantity);
  const decreaseQuantity = useProductsStore((state) => state.decreaseQuantity);

  return (
    <QuantitySelector
      onDecrease={decreaseQuantity}
      onIncrease={increaseQuantity}
      quantity={quantity}
      selectedQuantity={selectedQuantity}
    />
  );
}

export default PurchasePanelQuantitySelector;
