import { useProductStore } from "@/app/_store/productStore";
import QuantitySelector from "../../Common/QuantitySelector";

function PurchasePanelQuantitySelector() {
  const quantity = useProductStore((state) => state.quantity);
  const selectedQuantity = useProductStore((state) => state.selectedQuantity);
  const increaseQuantity = useProductStore((state) => state.increaseQuantity);
  const decreaseQuantity = useProductStore((state) => state.decreaseQuantity);

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
