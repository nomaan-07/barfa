import AccountEmptyProducts from "@/app/_components/Account/components/common/AccountEmptyProducts";
import AccountSectionHeader from "@/app/_components/Account/components/common/AccountSectionHeader";
import OrdersSection from "@/app/_components/Account/OrdersSection";
import { getOrders } from "@/app/_lib/data-services";
import { LucidePackageX } from "lucide-react";

async function OrdersPage() {
  const orders = await getOrders();

  if (!orders.length)
    return (
      <AccountEmptyProducts
        title="شما تا کنون هیچ سفارشی ثبت نکرده‌اید!"
        Icon={LucidePackageX}
        header={<AccountSectionHeader>تاریخچه سفارش‌ها</AccountSectionHeader>}
      />
    );

  return <OrdersSection orders={orders} />;
}

export default OrdersPage;
