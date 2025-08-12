import { ListProduct, ProductsVariation } from "@/app/_utils/types";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import clsx from "clsx";
import { ShoppingCart } from "lucide-react";
import ColorCircles from "./components/ColorCircles";
import DiscountBadge from "./components/DiscountBadge";
import FinalPrice from "./components/FinalPrice";
import OriginalPrice from "./components/OriginalPrice";
import ProductImage from "./components/ProductImage";
import QuantityText from "./components/QuantityText";
import Title from "./components/Title";

interface ProductCardProps {
  product: ListProduct;
  variation: ProductsVariation;
}

function ProductCard({ product, variation }: ProductCardProps) {
  const isSwiper = variation === "swiper";
  const isFinished = product.quantity === 0;
  const colorsArr = Object.entries(product.colors);
  const haveDiscount = product.discount_percent > 0;

  return (
    <Card
      shadow={isSwiper ? "none" : "sm"}
      className={clsx({
        "border-default-200 border": isSwiper,
        relative: !isSwiper,
        grayscale: isFinished,
      })}
    >
      {product.image_sources && (
        <ProductImage
          src={product.image_sources.main}
          alt={product.title_fa}
          id={product.id}
        />
      )}

      <div className="flex flex-grow flex-col space-y-4 p-2">
        <Title id={product.id} title={product.title_fa} />

        {!isFinished && (
          <>
            <div className="flex h-13 flex-col justify-end">
              <div className="flex items-center justify-between pl-8">
                {colorsArr.length && <ColorCircles colorsArr={colorsArr} />}
                {haveDiscount && <OriginalPrice price={product.price} />}
              </div>

              <div className="flex items-center justify-end">
                {haveDiscount && (
                  <DiscountBadge
                    discountPercent={product.discount_percent}
                    className={clsx(!isSwiper && "absolute top-2 left-2")}
                  />
                )}
                {!isSwiper && <QuantityText quantity={product.quantity!} />}
                <FinalPrice price={product.discounted_price} />
              </div>
            </div>
            <Button
              color="primary"
              endContent={<ShoppingCart className="size-4.5" />}
              fullWidth
            >
              افزودن به سبد خرید
            </Button>
          </>
        )}

        {isFinished && <QuantityText quantity={0} />}
      </div>
    </Card>
  );
}

export default ProductCard;
