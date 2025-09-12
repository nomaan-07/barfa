import { useCartStore } from "@/app/_store/cartStore";
import {
  selectorCurrentImage,
  useProductStore,
} from "@/app/_store/productStore";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
import clsx from "clsx";
import { ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  className?: string;
}

function AddToCartButton({ className }: AddToCartButtonProps) {
  const id = useProductStore((state) => state.id);
  const title = useProductStore((state) => state.title_fa);
  const hasInsurance = useProductStore((state) => state.hasInsurance);
  const warranty = useProductStore((state) => state.warranty);
  const quantity = useProductStore((state) => state.quantity);
  const selectedQuantity = useProductStore((state) => state.selectedQuantity);
  const discountPercent = useProductStore((state) => state.discount_percent);
  const discountedPrice = useProductStore((state) => state.discounted_price);
  const price = useProductStore((state) => state.price);
  const insuranceTitle = useProductStore((state) => state.insurance.title);
  const insurancePrice = useProductStore((state) => state.insurancePrice);

  const {
    url: imageSrc,
    fa: colorFa,
    en: colorEn,
    value: colorValue,
  } = useProductStore(selectorCurrentImage);

  const addToCart = useCartStore((state) => state.addProduct);

  function handleClick() {
    const product = {
      id: id,
      cartId: `${id}-${colorEn}`,
      imageSrc,
      title: title,
      color: {
        fa: colorFa,
        en: colorEn,
        value: colorValue,
      },
      insuranceTitle,
      insurancePrice,
      hasInsurance,
      warranty,
      quantity,
      selectedQuantity,
      discountPercent,
      discountedPrice,
      price,
    };

    addToCart(product);

    addToast({
      title: "محصول به سبد خرید اضافه شد.",
      color: "success",
      variant: "bordered",
    });
  }

  return (
    <Button
      color="primary"
      endContent={<ShoppingCart className="size-4.5" />}
      fullWidth
      className={clsx(className)}
      onPress={handleClick}
    >
      افزودن به سبد خرید
    </Button>
  );
}

export default AddToCartButton;
