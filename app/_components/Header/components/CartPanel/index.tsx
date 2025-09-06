import Cart from "@/app/_components/Cart";
import { selectorCartCount, useCartStore } from "@/app/_store/cartStore";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import CartButton from "./components/CartButton";

function CartPanel() {
  const pathname = usePathname();
  const productsCount = useCartStore(selectorCartCount);

  return (
    <div className={clsx(pathname !== "/cart" && "group relative")}>
      <CartButton />
      {/* FIXME: remove the count condition and move wrapper classes to cart itself*/}
      {pathname !== "/cart" && productsCount > 0 && (
        <div className="invisible absolute top-9.5 left-0 hidden pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 lg:block">
          <Cart variant="panel" />
        </div>
      )}
    </div>
  );
}

export default CartPanel;
