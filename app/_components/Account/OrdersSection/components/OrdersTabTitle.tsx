import { convertToPersian } from "@/app/_utils/helper";
import { Badge } from "@heroui/badge";
import { OrdersTabTitleProps } from "../types";

function OrdersTabTitle({ count, title }: OrdersTabTitleProps) {
  return (
    <Badge
      color={count >= 1 ? "primary" : "default"}
      size="sm"
      variant="solid"
      className="border-none"
      placement="top-left"
      content={convertToPersian(count)}
    >
      <div className="pt-1">{title}</div>
    </Badge>
  );
}

export default OrdersTabTitle;
