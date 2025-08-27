"use client";

import { Image } from "@heroui/image";
import { Skeleton } from "@heroui/skeleton";
import { useState } from "react";

interface MobileProductCardImageProps {
  src: string;
  alt: string;
}
function MobileProductCardImage({ src, alt }: MobileProductCardImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Skeleton className="rounded-lg" isLoaded={isLoaded}>
      <Image
        src={src}
        alt={alt}
        className="size-20"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
      />
    </Skeleton>
  );
}

export default MobileProductCardImage;
