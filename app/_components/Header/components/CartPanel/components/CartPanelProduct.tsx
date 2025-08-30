import Insurance from "@/app/_components/Common/Insurance";
import ProductBadges from "@/app/_components/Common/ProductBadges";
import ProductPrice from "@/app/_components/Common/ProductPrice";
import QuantitySelector from "@/app/_components/Common/QuantitySelector";
import QuantityText from "@/app/_components/Common/QuantityText";
import { useCartStore } from "@/app/_store/cartStore";
import { CartProduct } from "@/app/_utils/types";
import Image from "next/image";
import CartCurrentColor from "./CartCurrentColor";

interface CartPanelProductProps {
  product: CartProduct;
}

function CartPanelProduct({ product }: CartPanelProductProps) {
  const {
    id,
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
    price,
    discountedPrice,
  } = product;
  const toggleInsurance = useCartStore((state) => state.toggleInsurance);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  return (
    <div className="space-y-4 py-3">
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-1">
          <Image src={imageSrc} alt={title} width={128} height={128} />
        </div>

        <div className="col-span-2 mt-2 space-y-2">
          <div className="text-sm/loose font-bold">{title}</div>
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
        onClick={() => toggleInsurance(id)}
        price={insurancePrice}
        title={insuranceTitle}
        quantity={quantity}
      />

      <div className="flex items-end justify-between">
        <QuantitySelector
          quantity={quantity}
          selectedQuantity={selectedQuantity}
          onIncrease={() => increaseQuantity(id)}
          onDecrease={() => decreaseQuantity(id)}
          allowRemove
        />

        <ProductPrice
          discountPercent={discountPercent}
          finalPrice={discountedPrice}
          originalPrice={price}
        />
      </div>
    </div>
  );
}

export default CartPanelProduct;
