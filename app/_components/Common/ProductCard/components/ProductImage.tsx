import { ImageSources } from "@/app/_utils/types";
import { Image } from "@heroui/image";
import Link from "next/link";

interface ProductImageProps {
  imageSources: ImageSources;
  alt: string;
  id: number;
}

function ProductImage({ imageSources, alt, id }: ProductImageProps) {
  return (
    <Link href={`product/${id}`} className="mx-auto size-48 p-2 select-none">
      {imageSources && (
        <Image
          isZoomed
          src={imageSources.main}
          alt={alt}
          height={176}
          width="100%"
        />
      )}
    </Link>
  );
}

export default ProductImage;
