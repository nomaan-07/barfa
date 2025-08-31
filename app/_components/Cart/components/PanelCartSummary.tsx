import { Button } from "@heroui/button";
import Link from "next/link";
import CartSummaryPrice from "./CartSummaryPrice";

function PanelCartSummary() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="space-y-2">
        <CartSummaryPrice />
      </div>

      <Button as={Link} size="lg" href="/cart" color="primary">
        ثبت سفارش
      </Button>
    </div>
  );
}

export default PanelCartSummary;
