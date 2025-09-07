import { useCartStore } from "@/app/_store/cartStore";
import { convertToPersian } from "@/app/_utils/helper";
import { Card, CardBody, CardHeader } from "@heroui/card";
import CheckoutProducts from "./CheckoutProducts";

function CheckoutOrder() {
  const products = useCartStore((state) => state.products);

  const productsCount = products.reduce(
    (sum, product) => sum + product.selectedQuantity,
    0,
  );

  return (
    <Card className="w-full">
      <CardHeader className="justify-between">
        <h2 className="font-black sm:text-lg">سفارش شما</h2>
        <span className="text-default-500 text-sm">
          {convertToPersian(productsCount)} کالا
        </span>
      </CardHeader>
      <CardBody>
        <CheckoutProducts />
      </CardBody>
    </Card>
  );
}

export default CheckoutOrder;
