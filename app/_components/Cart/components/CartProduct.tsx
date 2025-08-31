import Insurance from "@/app/_components/Common/Insurance";
import ProductBadges from "@/app/_components/Common/ProductBadges";
import ProductPrice from "@/app/_components/Common/ProductPrice";
import QuantitySelector from "@/app/_components/Common/QuantitySelector";
import QuantityText from "@/app/_components/Common/QuantityText";
import {
  selectorCartProductFinalPrice,
  selectorCartProductOriginalPrice,
  useCartStore,
} from "@/app/_store/cartStore";
import { addToast } from "@heroui/toast";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { variantClasses } from "../cartVariants";
import { CartProductProps } from "../types";
import CartCurrentColor from "./CartCurrentColor";

function CartProduct({ product, variant }: CartProductProps) {
  const {
    id,
    cartId,
    title,
    imageSrc,
    insuranceTitle,
    insurancePrice,
    hasInsurance,
    quantity,
    selectedQuantity,
    discountPercent,
    warranty,
    color: { fa: colorFa, value: colorValue },
  } = product;
  const toggleInsurance = useCartStore((state) => state.toggleInsurance);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const finalPrice = useCartStore((state) =>
    selectorCartProductFinalPrice(state, cartId),
  );
  const originalPrice = useCartStore((state) =>
    selectorCartProductOriginalPrice(state, cartId),
  );

  function handleDecreaseQuantity() {
    decreaseQuantity(cartId);
    if (selectedQuantity === 1) {
      addToast({
        title: "محصول از سبد خرید حذف شد.",
        color: "warning",
        variant: "bordered",
      });
    }
  }

  return (
    <div
      className={clsx("space-y-4 py-4", variantClasses.cartProduct[variant])}
    >
      <div className="flex gap-2">
        <div className="shrink-0">
          <Image src={imageSrc} alt={title} width={112} height={112} />
        </div>

        <div className="mt-2 space-y-2">
          <Link
            href={`/product/${id}`}
            className="text-xs/relaxed font-bold sm:text-sm/loose"
          >
            {title}
          </Link>
          <CartCurrentColor name={colorFa} value={colorValue} />
          <QuantityText quantity={quantity} variant="normal" />
        </div>
      </div>

      <ProductBadges
        discountPercent={discountPercent}
        size="sm"
        warranty={warranty}
      />
      <Insurance
        hasInsurance={hasInsurance}
        onClick={() => toggleInsurance(cartId)}
        price={insurancePrice}
        title={insuranceTitle}
        quantity={quantity}
      />

      <div className="flex items-end justify-between">
        <QuantitySelector
          quantity={quantity}
          selectedQuantity={selectedQuantity}
          onIncrease={() => increaseQuantity(cartId)}
          onDecrease={handleDecreaseQuantity}
          allowRemove
        />

        <ProductPrice
          discountPercent={discountPercent}
          finalPrice={finalPrice}
          originalPrice={originalPrice}
        />
      </div>
    </div>
  );
}

export default CartProduct;
