import Insurance from "@/app/_components/Common/Insurance";
import ProductBadges from "@/app/_components/Common/ProductBadges";
import ProductPrice from "@/app/_components/Common/ProductPrice";
import QuantitySelector from "@/app/_components/Common/QuantitySelector";
import QuantityText from "@/app/_components/Common/QuantityText";
import { CartProduct } from "@/app/_utils/types";
import Image from "next/image";

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
    color: { fa: colorFa, value: colorHex },
    price,
    discountedPrice,
  } = product;
  return (
    <div className="space-y-4 py-3">
      {/* Picture, title, details */}
      <div className="grid grid-cols-3 gap-2">
        {/* picture */}
        <div className="col-span-1">
          <Image src={imageSrc} alt={title} width={128} height={128} />
        </div>
        {/* title */}
        <div className="col-span-2 mt-2 space-y-2">
          <div className="text-sm/loose font-bold">{title}</div>
          {/* Color */}
          <div className="flex items-center gap-1 text-sm">
            <span>رنگ:</span>
            <span>{colorFa}</span>
            <div
              className="border-default-100 size-4 rounded-full border"
              style={{ backgroundColor: colorHex }}
            ></div>
          </div>
          <QuantityText quantity={quantity} variant="normal" />
        </div>
      </div>
      <ProductBadges
        discountPercent={discountPercent}
        size="sm"
        warranty={warranty}
      />

      {/* Insurance */}
      <Insurance
        hasInsurance={hasInsurance}
        onClick={() => {}}
        price={insurancePrice}
        title={insuranceTitle}
        quantity={quantity}
      />
      {/* Price, quantity selector */}
      <div className="flex items-end justify-between">
        <QuantitySelector
          quantity={quantity}
          selectedQuantity={selectedQuantity}
          onIncrease={() => {}}
          onDecrease={() => {}}
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
