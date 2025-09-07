"use client";

import { useHydratedCart } from "@/app/_hooks/useHydratedCart";
import { submitOrder } from "@/app/_lib/actions";
import {
  selectorCartCount,
  selectorCartTotalPrice,
  useCartStore,
} from "@/app/_store/cartStore";
import { SHIPPING_PRICE } from "@/app/_utils/constants";
import { Address } from "@/app/_utils/types";
import { Spinner } from "@heroui/spinner";
import { addToast } from "@heroui/toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PriceSummaryCard from "../Common/PriceSummaryCard";
import CheckoutAddressForm from "./components/CheckoutAddressForm";
import CheckoutAddressSummary from "./components/CheckoutAddressSummary";
import CheckoutOrder from "./components/CheckoutOrder";

function Checkout() {
  const [address, setAddress] = useState<Address | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const hydrated = useHydratedCart();
  const productsCount = useCartStore(selectorCartCount);
  const totalPrice = useCartStore(selectorCartTotalPrice);
  const products = useCartStore((state) => state.products);
  const clearCart = useCartStore((state) => state.clearCart);

  if (!hydrated || !productsCount) return <Spinner size="lg" />;

  const handleOpenForm = () => setIsFormOpen(true);

  function saveAddress(address: Address) {
    setAddress(address);
    setIsFormOpen(false);
  }

  async function processPayment() {
    if (!address) return;

    setIsLoading(true);
    try {
      const orderedProducts = products.map((product) => ({
        id: product.id,
        color: product.color.en,
        quantity: product.selectedQuantity,
      }));

      const order = {
        address,
        products: orderedProducts,
        price: totalPrice + SHIPPING_PRICE,
      };

      await submitOrder(order);
      clearCart();

      addToast({
        title: "سفارش شما با موفقیت ثبت شد",
        color: "success",
        variant: "bordered",
      });
      router.push("/");
    } catch {
      addToast({
        title: "ثبت سفارش ناموفق بود",
        color: "danger",
        variant: "bordered",
      });
    } finally {
      setIsLoading(false);
    }
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
        isLoading={isLoading}
        onClick={processPayment}
        isDisabled={isFormOpen || isLoading}
      />
    </>
  );
}

export default Checkout;
