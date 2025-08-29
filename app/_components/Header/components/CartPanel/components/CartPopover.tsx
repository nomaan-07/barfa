import FinalPrice from "@/app/_components/Common/FinalPrice";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import Link from "next/link";
import CartPanelProducts from "./CartPanelProducts";
import { selectorCartCount, useCartStore } from "@/app/_store/cartStore";

function CartPopover() {
  const productsCount = useCartStore(selectorCartCount);

  return (
    <div className="invisible absolute top-9.5 left-0 hidden pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 lg:block">
      {/* <div className="absolute top-9.5 left-0 hidden pt-2 transition-all lg:block"> */}
      <Card className="border-small rounded-small border-default-300 divide-default-200 w-112 divide-y px-1 py-2">
        <CardHeader>
          <span className="text-default-500 text-sm">۴ کالا</span>
        </CardHeader>
        <CardBody className="text-right">
          <CartPanelProducts />
        </CardBody>
        <CardFooter className="justify-between">
          <div>
            <span className="text-default-500 text-sm">مبلغ قابل پرداخت</span>
            <FinalPrice price={4535000} variant="panel" />
          </div>

          <Button as={Link} href="/cart" color="primary" size="lg">
            ثبت سفارش
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CartPopover;
