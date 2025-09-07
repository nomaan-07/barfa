"use client";

import { useHydratedCart } from "@/app/_hooks/useHydratedCart";
import { selectorCartCount, useCartStore } from "@/app/_store/cartStore";
import { Spinner } from "@heroui/spinner";
import PriceSummaryCard from "../Common/PriceSummaryCard";
import NoProductsFound from "../Common/ProductsList/components/NoProductsFound";
import CheckoutAddressForm from "./components/CheckoutAddressForm";
import CheckoutOrder from "./components/CheckoutOrder";

function Checkout() {
  const productsCount = useCartStore(selectorCartCount);
  const hydrated = useHydratedCart();

  if (!hydrated) return <Spinner size="lg" />;

  if (!productsCount)
    return <NoProductsFound size="lg" title="شما هیچ سفارشی ثبت نکرده اید." />;

  return (
    <>
      <div className="w-full space-y-4">
        <CheckoutOrder />
        <CheckoutAddressForm />
      </div>
      <PriceSummaryCard
        page="checkout"
        buttonText="پرداخت"
        onClick={() => {}}
      />
    </>
  );
}

export default Checkout;
