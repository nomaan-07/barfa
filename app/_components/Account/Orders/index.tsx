"use client";

import { Card, CardBody } from "@heroui/card";
import { Tab, Tabs } from "@heroui/tabs";
import AccountSectionHeader from "../components/AccountSectionHeader";
import EmptyOrders from "./components/EmptyOrders";
import OrderRow from "./components/OrderRow";
import OrdersTabTitle from "./components/OrdersTabTitle";
import { OrdersProps } from "./types";

function Orders({ orders }: OrdersProps) {
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
            <EmptyOrders title="هیچ سفارشی تاکنون تحویل داده نشده است" />
          </Tab>
          <Tab
            key="canceled"
            title={<OrdersTabTitle count={0} title="لغو شده" />}
          >
            <EmptyOrders title="هیچ سفارشی تاکنون لغو نشده است" />
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}

export default Orders;
