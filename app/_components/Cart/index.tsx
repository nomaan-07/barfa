"use client";

import { selectorCartCount, useCartStore } from "@/app/_store/cartStore";
import NoProductsFound from "../Common/ProductsList/components/NoProductsFound";
import { variantClasses } from "./cartVariants";
import CartContent from "./components/CartContent";
import { CartBaseProps } from "./types";

function Cart({ variant }: CartBaseProps) {
  const productsCount = useCartStore(selectorCartCount);

  return (
    <div className={variantClasses.cartWrapper[variant]}>
      {productsCount > 0 ? (
        <CartContent variant={variant} />
      ) : (
        <NoProductsFound
          size={variant === "page" ? "lg" : "sm"}
          title="سبد خرید شما خالی است."
        />
      )}
    </div>
  );
}

export default Cart;
