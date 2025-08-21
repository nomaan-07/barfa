import { Image } from "@heroui/image";
import clsx from "clsx";
import { ImageThumbnailsProps } from "../types";

function ImageThumbnails({
  images,
  activeIndex,
  onSelect,
}: ImageThumbnailsProps) {
  return (
    <div className="hidden justify-center gap-2 lg:flex">
      {images.map((image, index) => (
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
            src={image.url}
            alt={image.fa}
            className="size-full object-cover select-none"
          />
        </div>
      ))}
    </div>
  );
}

export default ImageThumbnails;
