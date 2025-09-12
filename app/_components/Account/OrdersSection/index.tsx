"use client";

import { Card, CardBody } from "@heroui/card";
import { Tab, Tabs } from "@heroui/tabs";
import { LucidePackageX } from "lucide-react";
import AccountEmptyProducts from "../components/common/AccountEmptyProducts";
import AccountSectionHeader from "../components/common/AccountSectionHeader";
import OrderRow from "./components/OrderRow";
import OrdersTabTitle from "./components/OrdersTabTitle";
import { OrdersSectionProps } from "./types";

function OrdersSection({ orders }: OrdersSectionProps) {
  return (
    <Card>
      <AccountSectionHeader>تاریخچه سفارش‌ها</AccountSectionHeader>
      <CardBody className="flex flex-col gap-2">
        <Tabs aria-label="Options">
          <Tab
            key="current"
            title={<OrdersTabTitle count={orders.length} title="جاری" />}
          >
            <div className="space-y-4">
              {orders.map((order) => (
                <OrderRow key={order.id} order={order} />
              ))}
            </div>
          </Tab>
          <Tab
            key="delivered"
            title={<OrdersTabTitle count={0} title="تحویل شده" />}
          >
            <AccountEmptyProducts
              title="هیچ سفارشی تاکنون تحویل داده نشده است"
              Icon={LucidePackageX}
            />
          </Tab>
          <Tab
            key="canceled"
            title={<OrdersTabTitle count={0} title="لغو شده" />}
          >
            <AccountEmptyProducts
              title="هیچ سفارشی تاکنون لغو نشده است"
              Icon={LucidePackageX}
            />
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}

export default OrdersSection;
