import { selectorCartCount, useCartStore } from "@/app/_store/cartStore";
import { convertToPersian } from "@/app/_utils/helper";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
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
    <div className={variantClasses.cartHeader[variant]}>
      {variant === "page" && (
        <h2 className="font-black sm:text-lg">سبد خرید شما</h2>
      )}
      <div className="flex items-center justify-between">
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
    </div>
  );
}

export default CartHeader;
