import { selectorCartTotalPrice, useCartStore } from "@/app/_store/cartStore";
import FinalPrice from "../../Common/FinalPrice";

function CartSummaryPrice() {
  const totalPrice = useCartStore(selectorCartTotalPrice);

  return (
    <>
      <div className="text-default-500 text-sm">مبلغ قابل پرداخت</div>
      <FinalPrice price={totalPrice} variant="panel" />
    </>
  );
}

export default CartSummaryPrice;
