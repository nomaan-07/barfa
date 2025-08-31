import { useIsAtBottom } from "@/app/_hooks/useIsAtBottom";
import { useScrollDirection } from "@/app/_hooks/useScrollDirection";
import { Button } from "@heroui/button";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartSummaryPrice from "./CartSummaryPrice";

function PageCartSummary() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const scrollDirection = useScrollDirection();
  const isAtBottom = useIsAtBottom();

  useEffect(() => {
    const checkSize = () => setIsLargeScreen(window.innerWidth > 1024);

    checkSize();

    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div
      className={clsx(
        "lg:shadow-medium border-t-default-200 fixed inset-x-0 bottom-0 z-30 h-fit w-full shrink-0 space-y-4 border-t bg-white p-4 transition-all duration-500 sm:flex sm:items-center sm:justify-between lg:sticky lg:inset-x-auto lg:top-20 lg:bottom-auto lg:block lg:w-80 lg:rounded-2xl",
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
      <div className="flex items-center justify-between sm:block sm:space-y-2 lg:flex lg:space-y-0">
        <CartSummaryPrice />
      </div>

      <Button
        as={Link}
        href="/checkout"
        color="primary"
        className="w-full sm:w-auto lg:w-full"
      >
        تایید و تکمیل سفارش
      </Button>
    </div>
  );
}

export default PageCartSummary;
