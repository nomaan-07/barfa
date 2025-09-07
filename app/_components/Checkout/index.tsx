"use client";

import { useHydratedCart } from "@/app/_hooks/useHydratedCart";
import { selectorCartCount, useCartStore } from "@/app/_store/cartStore";
import { Address } from "@/app/_utils/types";
import { Spinner } from "@heroui/spinner";
import { useState } from "react";
import PriceSummaryCard from "../Common/PriceSummaryCard";
import NoProductsFound from "../Common/ProductsList/components/NoProductsFound";

import CheckoutAddressForm from "./components/CheckoutAddressForm";
import CheckoutAddressSummary from "./components/CheckoutAddressSummary";
import CheckoutOrder from "./components/CheckoutOrder";

function Checkout() {
  const [address, setAddress] = useState<Address | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(true);

  const hydrated = useHydratedCart();
  const productsCount = useCartStore(selectorCartCount);

  if (!hydrated) return <Spinner size="lg" />;

  if (!productsCount)
    return <NoProductsFound size="lg" title="شما هیچ سفارشی ثبت نکرده اید." />;

  const handleOpenForm = () => setIsFormOpen(true);

  function saveAddress(address: Address) {
    setAddress(address);
    setIsFormOpen(false);
  }

  function processPayment() {
    setAddress(address);
  }

  return (
    <>
      <div className="w-full space-y-4">
        <CheckoutOrder />

        {isFormOpen ? (
          <CheckoutAddressForm address={address} onSaveAddress={saveAddress} />
        ) : (
          <CheckoutAddressSummary
            address={address}
            onOpenForm={handleOpenForm}
          />
        )}
      </div>
      <PriceSummaryCard
        page="checkout"
        buttonText={isFormOpen ? "ابتدا آدرس را ثبت کنید" : "پرداخت"}
        onClick={processPayment}
        isDisabled={isFormOpen}
      />
    </>
  );
}

export default Checkout;
