"use client";

import { Image } from "@heroui/image";
import { Skeleton } from "@heroui/skeleton";
import { useState } from "react";

interface BannerImageProps {
  alt: string;
  src: string;
}

function BannerImage({ alt, src }: BannerImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="select-none">
      <Skeleton
        className={`aspect-video rounded-xl ${isLoaded ? "before:hidden after:hidden" : ""}`}
        isLoaded={isLoaded}
      >
        <Image
          alt={alt}
          src={src}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
        />
      </Skeleton>
    </div>
  );
}

export default BannerImage;
