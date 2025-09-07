"use client";

import { useHydratedCart } from "@/app/_hooks/useHydratedCart";
import { selectorCartCount, useCartStore } from "@/app/_store/cartStore";
import NoProductsFound from "../Common/ProductsList/components/NoProductsFound";
import { variantClasses } from "./cartVariants";
import CartContent from "./components/CartContent";
import CartSkeleton from "./components/CartSkeleton";
import { CartBaseProps } from "./types";

function Cart({ variant }: CartBaseProps) {
  const productsCount = useCartStore(selectorCartCount);
  const hydrated = useHydratedCart();

  if (!hydrated) return <CartSkeleton variant={variant} />;

  return (
    <div className={variantClasses.cartWrapper[variant]}>
      {productsCount > 0 ? (
        <CartContent variant={variant} />
      ) : (
        variant === "page" && (
          <NoProductsFound size="lg" title="سبد خرید شما خالی است." />
        )
      )}
    </div>
  );
}

export default Cart;
