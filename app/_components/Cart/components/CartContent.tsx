import clsx from "clsx";
import { variantClasses } from "../cartVariants";
import { CartBaseProps } from "../types";
import CartHeader from "./CartHeader";
import CartProducts from "./CartProducts";
import PageCartSummary from "./PageCartSummary";
import PanelCartSummary from "./PanelCartSummary";

function CartContent({ variant }: CartBaseProps) {
  return (
    <>
      <div
        className={clsx(
          "divide-default-200 divide-y",
          variantClasses.cartContent[variant],
        )}
      >
        <CartHeader variant={variant} />
        <CartProducts variant={variant} />
        {variant === "panel" && <PanelCartSummary />}
      </div>
      {variant === "page" && <PageCartSummary />}
    </>
  );
}

export default CartContent;
