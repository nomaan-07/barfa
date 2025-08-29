import CartButton from "./components/CartButton";
import CartPopover from "./components/CartPopover";

function CartPanel() {
  return (
    <div className="group relative">
      <CartButton />
      <CartPopover />
    </div>
  );
}

export default CartPanel;
