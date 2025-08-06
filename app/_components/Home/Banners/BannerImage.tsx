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
    <div className="relative">
      {isLoading && (
        <Skeleton className="bg-default-200 absolute inset-0 aspect-video rounded-lg"></Skeleton>
      )}
      <Image
        alt={alt}
        src={src}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
      />
    </div>
  );
}

export default BannerImage;
