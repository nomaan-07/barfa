import CartButton from "./components/CartButton";
import CartPanelWrapper from "./components/CartPanelWrapper";

function CartPanel() {
  return (
    <div className="group relative">
      <CartButton />
      <CartPanelWrapper />
    </div>
  );
}

export default CartPanel;
