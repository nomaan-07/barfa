import { convertToPersian } from "@/app/_utils/helper";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { OrderRowProps } from "../types";
import OrderModal from "./OrderModal";

function OrderRow({ order, index }: OrderRowProps) {
  const { id, price, products } = order;

  const totalProducts = products.reduce(
    (sum, product) => product.quantity + sum,
    0,
  );

  return (
    <Card>
      <CardBody>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Chip radius="sm" variant="flat">
            {convertToPersian(index + 1)}
          </Chip>

          <span className="text-primary text-sm">
            شماره پیگیری: #{convertToPersian(id)}
          </span>

          <span className="text-secondary text-sm">
            {convertToPersian(totalProducts)} کالا
          </span>

          <span className="text-success hidden text-sm sm:block md:hidden lg:block">
            {convertToPersian(price)} تومان
          </span>

          <OrderModal order={order} totalProducts={totalProducts} />
        </div>
      </CardBody>
    </Card>
  );
}

export default OrderRow;
