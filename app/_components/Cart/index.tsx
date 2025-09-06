"use client";

import { selectorCartCount, useCartStore } from "@/app/_store/cartStore";
import { useEffect, useState } from "react";
import { variantClasses } from "./cartVariants";
import CartContent from "./components/CartContent";
import CartSkeleton from "./components/CartSkeleton";
import { CartBaseProps } from "./types";

function Cart({ variant }: CartBaseProps) {
  const productsCount = useCartStore(selectorCartCount);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    useCartStore.persist.rehydrate()?.then(() => setHydrated(true));
  }, []);

  if (!hydrated) return <CartSkeleton variant={variant} />;
  if (productsCount === 0) return null;

  return (
    <div className={variantClasses.cartWrapper[variant]}>
      <CartContent variant={variant} />
    </div>
  );
}

export default Cart;
