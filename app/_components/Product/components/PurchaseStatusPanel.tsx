import { useCartStore } from "@/app/_store/cartStore";
import { useProductsStore } from "@/app/_store/productStore";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import clsx from "clsx";
import { LucideBell, LucideShoppingCart } from "lucide-react";
import Link from "next/link";

function PurchaseStatusPanel({}) {
  const quantity = useProductsStore((state) => state.quantity);
  const id = useProductsStore((state) => state.id);
  const productExistInCart = useCartStore((state) => state.existingProduct(id));

  const variant = productExistInCart
    ? "in-cart"
    : quantity === 0
      ? "finished"
      : null;

  if (!variant) return null;

  const Icon = variant === "finished" ? LucideBell : LucideShoppingCart;

  return (
    <Card
      className={clsx(
        "fixed right-0 bottom-0 left-0 z-30 mb-0 rounded-none lg:sticky lg:top-4 lg:mb-6 lg:block lg:rounded-xl",
        {
          "bg-danger-50": variant === "finished",
          "bg-primary-50": variant === "in-cart",
        },
      )}
    >
      <CardBody>
        <div className="flex flex-wrap items-center justify-center gap-2 text-right sm:justify-between">
          <span
            className={clsx("font-bold sm:text-lg", {
              "text-danger": variant === "finished",
              "text-primary": variant === "in-cart",
            })}
          >
            {variant === "finished" && "موجودی این کالا به پایان رسیده است."}
            {variant === "in-cart" && "محصول در سبد خرید موجود است."}
          </span>
          <Button
            color={variant === "finished" ? "warning" : "primary"}
            startContent={<Icon className="size-5" />}
            className="w-full sm:w-auto"
            {...(variant === "in-cart" ? { as: Link, href: "/cart" } : {})}
          >
            {variant === "finished" && "موجود شد، خبرم کن!"}
            {variant === "in-cart" && "مشاهده سبد خرید"}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default PurchaseStatusPanel;
