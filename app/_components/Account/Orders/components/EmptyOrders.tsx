import { Card, CardBody } from "@heroui/card";
import { LucidePackage } from "lucide-react";
import { EmptyOrdersProps } from "../types";

function EmptyOrders({
  title = "شما تا کنون هیچ سفارشی ثبت نکرده‌اید!",
}: EmptyOrdersProps) {
  return (
    <Card>
      <CardBody>
        <div className="flex flex-col items-center justify-center gap-3 py-6 text-center sm:py-12">
          <LucidePackage className="text-danger size-10" />
          <h3 className="font-medium sm:text-xl">{title}</h3>
        </div>
      </CardBody>
    </Card>
  );
}

export default EmptyOrders;
