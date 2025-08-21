import { CurrentColorLineProps } from "../types";

function CurrentColorLine({ activeImage }: CurrentColorLineProps) {
  return (
    <div className="order-2 mt-2 flex items-center gap-2 lg:order-1 lg:mt-0 lg:mb-2">
      <div className="shrink-0 text-xs sm:text-sm lg:text-base">
        <span className="ml-1 font-medium">رنگ انتخاب شده:</span>
        <span>{activeImage.fa}</span>
      </div>
      <div
        className="h-1 w-full rounded-full lg:h-1.5"
        style={{ backgroundColor: activeImage.value }}
      ></div>
    </div>
  );
}

export default CurrentColorLine;
