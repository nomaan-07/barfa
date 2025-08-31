import { selectorCartCount, useCartStore } from "@/app/_store/cartStore";
import { convertToPersian } from "@/app/_utils/helper";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
import clsx from "clsx";
import { LucideTrash2 } from "lucide-react";
import { variantClasses } from "../cartVariants";
import { CartBaseProps } from "../types";

function CartHeader({ variant }: CartBaseProps) {
  const productsCount = useCartStore(selectorCartCount);
  const clearCart = useCartStore((state) => state.clearCart);

  function handleClearCart() {
    clearCart();
    addToast({
      title: "سبد خرید خالی شد.",
      color: "danger",
      variant: "bordered",
    });
  }

  return (
    <div
      className={clsx(
        "flex items-center justify-between",
        variantClasses.cartHeader[variant],
      )}
    >
      <span className="text-default-500 text-sm">
        {convertToPersian(productsCount)} کالا
      </span>
      <Button
        variant="light"
        color="danger"
        endContent={<LucideTrash2 className="size-4" />}
        onPress={handleClearCart}
      >
        حذف همه
      </Button>
    </div>
  );
}

export default CartHeader;
