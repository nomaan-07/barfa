import {
  selectorCurrentImage,
  useProductStore,
} from "@/app/_store/productStore";

function CurrentColorLine() {
  const currentImage = useProductStore(selectorCurrentImage);

  if (!currentImage) return null;

  return (
    <div className="order-2 flex w-full items-center gap-2 lg:order-1 lg:mb-2">
      <div className="shrink-0 text-xs sm:text-sm lg:text-base">
        <span className="ml-1 font-medium">رنگ انتخاب شده:</span>
        <span>{currentImage.fa}</span>
      </div>
      <div
        className="border-default-200 h-1.5 w-full rounded-full border lg:h-2"
        style={{ backgroundColor: currentImage.value }}
      ></div>
    </div>
  );
}

export default CurrentColorLine;
