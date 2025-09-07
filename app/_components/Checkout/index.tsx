"use client";

import { useHydratedCart } from "@/app/_hooks/useHydratedCart";
import { selectorCartCount, useCartStore } from "@/app/_store/cartStore";
import { Address } from "@/app/_utils/types";
import { Spinner } from "@heroui/spinner";
import { useState } from "react";
import PriceSummaryCard from "../Common/PriceSummaryCard";
import NoProductsFound from "../Common/ProductsList/components/NoProductsFound";
import CheckoutAddressForm from "./components/CheckoutAddressForm";
import CheckoutOrder from "./components/CheckoutOrder";

function Checkout() {
  const [address, setAddress] = useState<Address | null>(null);

  const hydrated = useHydratedCart();
  const productsCount = useCartStore(selectorCartCount);

  if (!hydrated) return <Spinner size="lg" />;

  if (!productsCount)
    return <NoProductsFound size="lg" title="شما هیچ سفارشی ثبت نکرده اید." />;

  function handlePayment() {
    setAddress(address);
  }

  return (
    <>
      <div className="w-full space-y-4">
        <CheckoutOrder />
        <CheckoutAddressForm address={address} setAddress={setAddress} />
      </div>
      <PriceSummaryCard
        page="checkout"
        buttonText={address ? "پرداخت" : "ابتدا آدرس را ثبت کنید"}
        onClick={handlePayment}
        isDisabled={!address}
      />
    </>
  );
}

export default Checkout;
