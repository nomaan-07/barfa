import { convertToPersian } from "@/app/_utils/helper";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { OrderRowProps } from "../types";
import OrderModal from "./OrderModal";

function OrderRow({ order }: OrderRowProps) {
  const { id, price, products } = order;

  const totalProducts = products.reduce(
    (sum, product) => product.quantity + sum,
    0,
  );

  return (
    <Card>
      <CardBody className="flex flex-col items-start justify-between gap-4 p-4 sm:flex-row sm:items-center sm:p-6">
        <div className="flex flex-1 flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <Chip radius="sm" variant="flat">
            {convertToPersian(id)}#
          </Chip>

          <span className="text-secondary text-sm">
            تعداد محصولات: {convertToPersian(totalProducts)}
          </span>

          <span className="text-success text-sm">
            {convertToPersian(price)} تومان
          </span>
        </div>

        <div className="h-8 w-full flex-shrink-0 sm:w-auto">
          <OrderModal order={order} totalProducts={totalProducts} />
        </div>
      </CardBody>
    </Card>
  );
}

export default OrderRow;
