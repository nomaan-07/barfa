import { ListProduct, ProductsVariation } from "@/app/_utils/types";
import { Card } from "@heroui/card";
import clsx from "clsx";
import DiscountBadge from "../DiscountBadge";
import FinalPrice from "../FinalPrice";
import OriginalPrice from "../OriginalPrice";
import QuantityText from "../QuantityText";
import CardColorCircles from "./components/CardColorCircles";
import ProductCardImage from "./components/ProductCardImage";
import ProductCardTitle from "./components/ProductCardTitle";

interface ProductCardProps {
  product: ListProduct;
  variation: ProductsVariation;
}

function ProductCard({ product, variation }: ProductCardProps) {
  const isSwiper = variation === "swiper";
  const isFinished = product.quantity === 0;
  const hasDiscount = product.discount_percent > 0;

  return (
    <Card
      shadow={isSwiper ? "none" : "sm"}
      className={clsx({
        "border-default-200 border": isSwiper,
        relative: !isSwiper,
        grayscale: isFinished,
      })}
    >
      <ProductCardImage
        src={product.image_sources.main}
        alt={product.title_fa}
        id={product.id}
      />

      <div className="flex flex-grow flex-col space-y-4 p-2">
        <ProductCardTitle id={product.id} title={product.title_fa} />

        {!isFinished && (
          <>
            <div className="flex h-13 flex-col justify-end">
              <div className="flex h-6 items-center justify-between pl-8">
                <CardColorCircles colors={product.colors} />
                {hasDiscount && (
                  <OriginalPrice variant="card" price={product.price} />
                )}
              </div>

              <div className="flex items-center justify-end">
                {hasDiscount && (
                  <DiscountBadge
                    discountPercent={product.discount_percent}
                    isAbsolute={!isSwiper}
                  />
                )}
                {!isSwiper && (
                  <QuantityText variant="card" quantity={product.quantity!} />
                )}
                <FinalPrice variant="card" price={product.discounted_price} />
              </div>
            </div>
          </>
        )}

        {isFinished && <QuantityText variant="card" quantity={0} />}
      </div>
    </Card>
  );
}

export default ProductCard;
