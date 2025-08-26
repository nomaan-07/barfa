import { ListProduct } from "@/app/_utils/types";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import Link from "next/link";
import DiscountBadge from "../DiscountBadge";
import FinalPrice from "../FinalPrice";
import OriginalPrice from "../OriginalPrice";
import CardColorCircles from "../ProductCard/components/CardColorCircles";
import QuantityText from "../QuantityText";
import MobileFinishedCard from "./MobileFinishedCard";

interface MobileProductCardProps {
  product: ListProduct;
}

function MobileProductCard({ product }: MobileProductCardProps) {
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
    return <MobileFinishedCard id={id} imageSrc={imageSrc} title={titleFa} />;

  return (
    <Card
      shadow="sm"
      className="select-none sm:hidden"
      as={Link}
      href={`/product/${id}`}
    >
      <CardBody className="flex-row gap-1 text-right">
        <div className="shrink-0 space-y-2">
          <Image src={imageSrc} alt={titleFa} className="size-20" />
          <CardColorCircles colors={colors} variant="mobile" />
        </div>

        <div className="flex w-full flex-col justify-between">
          <div className="h-4">
            <QuantityText quantity={quantity} variant="card" />
          </div>

          <p className="line-clamp-2 min-h-10 text-xs/relaxed">{titleFa}</p>

          <div className="flex items-end justify-between">
            {hasDiscount && <DiscountBadge discountPercent={discountPercent} />}

            <div className="flex w-full flex-col items-end">
              {hasDiscount && <OriginalPrice price={price} variant="card" />}
              <FinalPrice price={discountedPrice} variant="card" />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default MobileProductCard;
