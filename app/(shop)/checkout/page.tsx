import Checkout from "@/app/_components/Checkout";
import CheckoutSkeleton from "@/app/_components/Checkout/components/CheckoutSkeleton";
import { Suspense } from "react";

async function CheckoutPage() {
  await new Promise((resolve) => setTimeout(resolve, 20000));

  return (
    <Suspense fallback={<CheckoutSkeleton />}>
      <div className="relative mx-auto mt-4 flex max-w-7xl gap-4 px-6">
        <Checkout />
      </div>
    </Suspense>
  );
}

export default CheckoutPage;
