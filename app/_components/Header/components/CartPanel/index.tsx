import Cart from "@/app/_components/Cart";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import CartButton from "./components/CartButton";

const hideCartOn = ["/cart", "/checkout"];

function CartPanel() {
  const pathname = usePathname();

  const shouldHideCart = hideCartOn.includes(pathname);

  return (
    <div className={clsx(!shouldHideCart && "group relative")}>
      <CartButton />
      {!shouldHideCart && (
        <div className="invisible absolute top-9.5 left-0 hidden pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 lg:block">
          <Cart variant="panel" />
        </div>
      )}
    </div>
  );
}

export default CartPanel;
