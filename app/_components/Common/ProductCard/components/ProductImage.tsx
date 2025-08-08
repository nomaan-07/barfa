import { Image } from "@heroui/image";
import { Skeleton } from "@heroui/skeleton";
import Link from "next/link";
import { useState } from "react";

interface ProductImageProps {
  src: string;
  alt: string;
  id: number;
}

function ProductImage({ src, alt, id }: ProductImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Link href={`product/${id}`} className="mx-auto size-48 p-2 select-none">
      <Skeleton className="rounded-lg" isLoaded={isLoaded}>
        <Image
          isZoomed
          src={src}
          alt={alt}
          height={176}
          width="100%"
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
        />
      </Skeleton>
    </Link>
  );
}

export default ProductImage;
