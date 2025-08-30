import {
  selectorCurrentImage,
  useProductsStore,
} from "@/app/_store/productStore";
import clsx from "clsx";

function CurrentColorLine() {
  const currentImage = useProductsStore(selectorCurrentImage);

  if (!currentImage) return null;

  const isWhiteImage = currentImage.en === "white";

  return (
    <div className="order-2 flex w-full items-center gap-2 lg:order-1 lg:mb-2">
      <div className="shrink-0 text-xs sm:text-sm lg:text-base">
        <span className="ml-1 font-medium">رنگ انتخاب شده:</span>
        <span>{currentImage.fa}</span>
      </div>
      <div
        className={clsx(
          "w-full rounded-full",
          isWhiteImage
            ? "border-default-200 h-1.5 border lg:h-2"
            : "h-1 lg:h-1.5",
        )}
        style={{ backgroundColor: currentImage.value }}
      ></div>
    </div>
  );
}

export default CurrentColorLine;
