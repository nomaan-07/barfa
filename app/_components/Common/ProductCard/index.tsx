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
import ProductFinishedCard from "./components/ProductFinishedCard";

interface ProductCardProps {
  product: ListProduct;
  variation: ProductsVariation;
}

function ProductCard({ product, variation }: ProductCardProps) {
  const {
    id,
    quantity,
    title_fa: titleFa,
    image_sources: { main: imageSrc },
    colors,
    price,
    discount_percent: discountPercent,
    discounted_price: discountedPrice,
  } = product;

  const hasDiscount = product.discount_percent > 0;

  if (quantity === 0)
    return <ProductFinishedCard id={id} imageSrc={imageSrc} title={titleFa} />;

  return (
    <Card
      shadow={variation === "swiper" ? "none" : "sm"}
      className={clsx({
        "border-default-200 border": variation === "swiper",
        "relative hidden sm:flex": variation === "list",
      })}
    >
      <ProductCardImage src={imageSrc} alt={titleFa} id={id} />
      <div className="flex flex-grow flex-col space-y-4 p-2">
        <ProductCardTitle id={id} title={titleFa} />

        <div className="flex h-13 flex-col justify-end">
          <div className="flex h-6 items-center justify-between">
            <CardColorCircles colors={colors} variant="desktop" />
            {hasDiscount && <OriginalPrice variant="card" price={price} />}
          </div>

          <div className="flex items-center justify-end">
            {hasDiscount && (
              <DiscountBadge
                discountPercent={discountPercent}
                isAbsolute={variation === "list"}
              />
            )}
            {variation === "list" && (
              <QuantityText variant="normal" quantity={quantity} />
            )}
            <FinalPrice variant="card" price={discountedPrice} />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProductCard;
