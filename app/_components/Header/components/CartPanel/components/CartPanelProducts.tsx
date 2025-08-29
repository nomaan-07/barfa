import { useCartStore } from "@/app/_store/cartStore";
import CartPanelProduct from "./CartPanelProduct";

function CartPanelProducts() {
  const products = useCartStore((state) => state.products);
  return (
    <div className="divide-default-200 h-96 divide-y">
      {products.map((product) => (
        <CartPanelProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CartPanelProducts;
