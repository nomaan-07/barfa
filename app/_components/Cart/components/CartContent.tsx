import clsx from "clsx";
import PriceSummaryCard from "../../Common/PriceSummaryCard";
import { variantClasses } from "../cartVariants";
import { CartBaseProps } from "../types";
import CartHeader from "./CartHeader";
import CartProducts from "./CartProducts";
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
      {variant === "page" && (
        <PriceSummaryCard
          buttonText="تایید و تکمیل سفارش"
          page="cart"
          href="/checkout"
        />
      )}
    </>
  );
}

export default CartContent;
