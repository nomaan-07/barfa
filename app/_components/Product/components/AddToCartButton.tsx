import { useCartStore } from "@/app/_store/cartStore";
import {
  selectorCurrentImage,
  useProductsStore,
} from "@/app/_store/productStore";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
import clsx from "clsx";
import { ShoppingCart } from "lucide-react";
import { useShallow } from "zustand/shallow";

interface AddToCartButtonProps {
  className?: string;
}

function AddToCartButton({ className }: AddToCartButtonProps) {
  const {
    id,
    title,
    hasInsurance,
    warranty,
    quantity,
    selectedQuantity,
    discountPercent,
    discountedPrice,
    price,
    insurancePrice,
    insuranceTitle,
  } = useProductsStore(
    useShallow((state) => ({
      id: state.id,
      title: state.title_fa,
      insurance: state.insurance,
      hasInsurance: state.hasInsurance,
      warranty: state.warranty,
      quantity: state.quantity,
      selectedQuantity: state.selectedQuantity,
      discountPercent: state.discount_percent,
      discountedPrice: state.discounted_price,
      price: state.price,
      insuranceTitle: state.insurance.title,
      insurancePrice: state.insurancePrice,
    })),
  );
  const {
    url: imageSrc,
    fa: colorFa,
    en: colorEn,
    value: colorValue,
  } = useProductsStore(selectorCurrentImage);

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
