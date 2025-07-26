"use client";

import { Button, Tooltip } from "@heroui/react";
import { LucideShoppingCart } from "lucide-react";
import Link from "next/link";

function CartButton() {
  return (
    <>
      <Tooltip content="سبد خرید">
        <Button
          as={Link}
          href="/cart"
          isIconOnly
          variant="light"
          className="hidden lg:flex"
        >
          <LucideShoppingCart className="size-5" />
        </Button>
      </Tooltip>
      <Button
        as={Link}
        href="/cart"
        isIconOnly
        variant="bordered"
        className="border-small lg:hidden"
      >
        <LucideShoppingCart className="size-5" />
      </Button>
    </>
  );
}

export default CartButton;
