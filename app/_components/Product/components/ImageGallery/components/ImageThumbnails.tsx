import { Image } from "@heroui/image";
import clsx from "clsx";
import { ImageThumbnailsProps } from "../types";

function ImageThumbnails({
  images,
  activeIndex,
  onSelect,
}: ImageThumbnailsProps) {
  return (
    <div className="mt-2 hidden justify-center gap-2 lg:flex">
      {images.map((img, index) => (
        <div
          key={index}
          className={clsx(
            "size-12 cursor-pointer overflow-hidden rounded-md border",
            {
              "border-primary": activeIndex === index,
              "border-default-300": activeIndex !== index,
            },
          )}
          onClick={() => onSelect(index)}
        >
          <Image
            src={img.url}
            alt={`تصویر ${img.fa} محصول`}
            className="size-full object-cover select-none"
          />
        </div>
      ))}
    </div>
  );
}

export default ImageThumbnails;
