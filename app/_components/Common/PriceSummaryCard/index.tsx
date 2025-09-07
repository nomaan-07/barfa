import { useIsAtBottom } from "@/app/_hooks/useIsAtBottom";
import { useScrollDirection } from "@/app/_hooks/useScrollDirection";
import { selectorCartTotalPrice, useCartStore } from "@/app/_store/cartStore";
import { SHIPPING_PRICE } from "@/app/_utils/constants";
import { Button } from "@heroui/button";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import PriceRow from "./components/PriceRow";

type BaseProps = {
  page: "cart" | "checkout";
  buttonText: string;
};

type PriceSummaryCardProps =
  | (BaseProps & { href: string; onClick?: never })
  | (BaseProps & { href?: never; onClick: () => void });

function PriceSummaryCard({
  page,
  buttonText,
  href,
  onClick,
}: PriceSummaryCardProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const totalPrice = useCartStore(selectorCartTotalPrice);

  const scrollDirection = useScrollDirection();
  const isAtBottom = useIsAtBottom();
  const finalPrice =
    page === "checkout" ? totalPrice + SHIPPING_PRICE : totalPrice;

  useEffect(() => {
    const checkSize = () => setIsLargeScreen(window.innerWidth > 1024);

    checkSize();

    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div
      className={clsx(
        "lg:shadow-medium border-t-default-200 fixed inset-x-0 bottom-0 z-30 h-fit w-full shrink-0 space-y-4 border-t bg-white p-4 transition-all duration-500 sm:flex sm:items-center sm:justify-between sm:space-y-0 lg:sticky lg:inset-x-auto lg:top-20 lg:bottom-auto lg:block lg:w-80 lg:space-y-4 lg:rounded-2xl",
        isAtBottom &&
          "pointer-events-none translate-y-6 opacity-0 lg:pointer-events-auto lg:translate-y-0 lg:opacity-100",
      )}
      style={{
        transform:
          isLargeScreen && scrollDirection === "down"
            ? "translateY(-64px)"
            : "translateY(0)",
      }}
    >
      {page === "checkout" && (
        <PriceRow
          price={SHIPPING_PRICE}
          title="هزینه بسته بندی و ارسال"
          isBordered
        />
      )}
      <PriceRow price={finalPrice} title="مبلغ قابل پرداخت" />

      {href ? (
        <Button
          as={Link}
          href={href}
          color="primary"
          className="w-full sm:w-auto lg:w-full"
        >
          {buttonText}
        </Button>
      ) : (
        <Button
          onPress={onClick}
          color="primary"
          className="w-full sm:w-auto lg:w-full"
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
}

export default PriceSummaryCard;
