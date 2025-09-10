import Orders from "@/app/_components/Account/Orders";
import EmptyOrders from "@/app/_components/Account/Orders/components/EmptyOrders";
import { getOrders } from "@/app/_lib/data-services";

async function OrdersPage() {
  const orders = await getOrders();

  if (!orders.length) return <EmptyOrders />;

  return <Orders orders={orders} />;
}

export default OrdersPage;
