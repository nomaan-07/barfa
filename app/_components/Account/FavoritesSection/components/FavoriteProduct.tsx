import { FavoriteProductType } from "@/app/_utils/types";
import { Image } from "@heroui/image";
import Link from "next/link";
import DeleteFavoriteButton from "./DeleteFavoriteButton";

interface FavoriteProductProps {
  product: FavoriteProductType;
}

function FavoriteProduct({ product }: FavoriteProductProps) {
  const { id, title, imageSrc } = product;
  const href = `/product/${id}`;

  return (
    <div className="shadow-small space-y-2 rounded-xl p-3">
      <Link href={href} className="flex shrink-0 items-center justify-center">
        <Image isZoomed src={imageSrc} alt={title} className="size-28" />
      </Link>

      <Link
        className="hover:text-primary line-clamp-2 h-10 text-right text-sm font-medium transition-colors sm:h-12 sm:text-base"
        href={href}
      >
        {title}
      </Link>

      <DeleteFavoriteButton title={title} id={id} />
    </div>
  );
}

export default FavoriteProduct;
