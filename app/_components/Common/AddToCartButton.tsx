import { Button } from "@heroui/button";
import clsx from "clsx";
import { ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  className?: string;
}

function AddToCartButton({ className }: AddToCartButtonProps) {
  return (
    <Button
      color="primary"
      endContent={<ShoppingCart className="size-4.5" />}
      fullWidth
      className={clsx(className)}
    >
      افزودن به سبد خرید
    </Button>
  );
}

export default AddToCartButton;
