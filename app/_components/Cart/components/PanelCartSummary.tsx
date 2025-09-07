import { selectorCartTotalPrice, useCartStore } from "@/app/_store/cartStore";
import { Button } from "@heroui/button";
import Link from "next/link";
import FinalPrice from "../../Common/FinalPrice";

function PanelCartSummary() {
  const totalPrice = useCartStore(selectorCartTotalPrice);

  return (
    <div className="flex items-center justify-between p-4">
      <div className="space-y-2">
        <div className="text-default-500 text-sm">مبلغ قابل پرداخت</div>
        <FinalPrice price={totalPrice} variant="panel" />
      </div>

      <Button as={Link} size="lg" href="/cart" color="primary">
        ثبت سفارش
      </Button>
    </div>
  );
}

export default PanelCartSummary;
