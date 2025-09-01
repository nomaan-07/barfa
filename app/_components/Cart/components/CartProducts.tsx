import { useCartStore } from "@/app/_store/cartStore";
import clsx from "clsx";
import { variantClasses } from "../cartVariants";
import { CartBaseProps } from "../types";
import CartProduct from "./CartProduct";

function CartProducts({ variant }: CartBaseProps) {
  const products = useCartStore((state) => state.products);

  return (
    <div
      className={clsx(
        "divide-default-200 divide-y",
        variantClasses.cartProducts[variant],
      )}
    >
      {products.map((product, index) => (
        <CartProduct
          key={product.cartId}
          product={product}
          variant={variant}
          index={index}
        />
      ))}
    </div>
  );
}

export default CartProducts;
