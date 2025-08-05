"use client";

import { Image } from "@heroui/image";
import { Skeleton } from "@heroui/skeleton";
import { useState } from "react";

interface BannerImageProps {
  alt: string;
  src: string;
}
function BannerImage({ alt, src }: BannerImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <Skeleton className="bg-default-200 h-50 rounded-lg sm:h-75"></Skeleton>
      )}
      <Image
        alt={alt}
        src={src}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
    </>
  );
}

export default BannerImage;
