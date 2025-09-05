import { selectorCartCount, useCartStore } from "@/app/_store/cartStore";
import { convertToPersian } from "@/app/_utils/helper";
import { Badge } from "@heroui/badge";
import { Button } from "@heroui/button";
import { LucideShoppingCart } from "lucide-react";
import Link from "next/link";

function CartButton() {
  const productsCount = useCartStore(selectorCartCount);

  return (
    <Badge
      color="primary"
      content={productsCount > 0 && convertToPersian(productsCount)}
      isInvisible={productsCount === 0}
    >
      <Button
        as={Link}
        href="/cart"
        isIconOnly
        variant="light"
        className="hidden lg:flex"
      >
        <LucideShoppingCart className="size-5" />
      </Button>

      <Button
        as={Link}
        href="/cart"
        isIconOnly
        variant="bordered"
        className="border-small lg:hidden"
      >
        <LucideShoppingCart className="size-5" />
      </Button>
    </Badge>
  );
}

export default CartButton;
