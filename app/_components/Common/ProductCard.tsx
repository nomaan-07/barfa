import { convertToPersian } from "@/app/_utils/helper";
import { Product } from "@/app/_utils/types";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Image } from "@heroui/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const haveDiscount = product.discountPercent > 0;

  const discountedPrice = haveDiscount
    ? convertToPersian(
        Number(
          (product.price * (1 - product.discountPercent / 100)).toFixed(0),
        ),
      )
    : convertToPersian(product.price);

  return (
    <Card shadow="none" className="border-default-200 w-56 border">
      {/* Image */}
      <Link href={product.link}>
        <Image
          isZoomed
          src={product.imageSrc}
          alt={product.title}
          height={156}
          width="100%"
        />
      </Link>

      {/* Content */}
      <div className="flex flex-grow flex-col space-y-4 p-2">
        {/* Title */}
        <Link
          href={product.link}
          className="hover:text-primary line-clamp-2 min-h-12 transition-colors"
        >
          {product.title}
        </Link>

        {/* Price section */}
        <div className="flex h-13 flex-col justify-end">
          {haveDiscount && (
            <div className="decoration-default-400 text-default-400 self-end pl-8 line-through">
              {convertToPersian(product.price)}
            </div>
          )}

          <div className="flex items-center justify-end">
            {/* Discount Badge */}
            {haveDiscount && (
              <div className="bg-danger ml-auto rounded-md px-1 text-sm text-white">
                {convertToPersian(product.discountPercent)}٪
              </div>
            )}
            <div className="font-medium">
              <span className="text-lg">{discountedPrice}</span>
              <span className="mr-0.5 text-xs">تومان</span>
            </div>
          </div>
        </div>

        {/* Add to cart button */}
        <Button
          color="primary"
          endContent={<ShoppingCart className="size-4.5" />}
          fullWidth
        >
          افزودن به سبد خرید
        </Button>
      </div>
    </Card>
  );
}

export default ProductCard;
