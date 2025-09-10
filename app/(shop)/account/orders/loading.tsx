import AccountWrapperSkeleton from "@/app/_components/Account/components/skeleton/AccountWrapperSkeleton";
import OrdersSkeleton from "@/app/_components/Account/Orders/components/OrdersSkeleton";

function OrdersLoading() {
  return (
    <AccountWrapperSkeleton>
      <OrdersSkeleton />
    </AccountWrapperSkeleton>
  );
}

export default OrdersLoading;
