import FinalPrice from "@/app/_components/Common/FinalPrice";
import NoProductsFound from "@/app/_components/Common/ProductsList/components/NoProductsFound";
import {
  selectorCartCount,
  selectorTotalPrice,
  useCartStore,
} from "@/app/_store/cartStore";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import Link from "next/link";
import CartPanelProducts from "./CartPanelProducts";

function CartPopover() {
  const productsCount = useCartStore(selectorCartCount);
  const totalPrice = useCartStore(selectorTotalPrice);

  return (
    <div className="invisible absolute top-9.5 left-0 hidden pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 lg:block">
      <Card className="border-small rounded-small border-default-300 divide-default-200 w-112 divide-y px-1 py-2">
        {productsCount > 0 ? (
          <>
            <CardHeader>
              <span className="text-default-500 text-sm">
                {productsCount} کالا
              </span>
            </CardHeader>
            <CardBody className="text-right">
              <CartPanelProducts />
            </CardBody>
            <CardFooter className="justify-between">
              <div>
                <span className="text-default-500 text-sm">
                  مبلغ قابل پرداخت
                </span>
                <FinalPrice price={totalPrice} variant="panel" />
              </div>

              <Button as={Link} href="/cart" color="primary" size="lg">
                ثبت سفارش
              </Button>
            </CardFooter>
          </>
        ) : (
          <NoProductsFound size="sm" title="سبد خرید شما خالی است." />
        )}
      </Card>
    </div>
  );
}

export default CartPopover;
