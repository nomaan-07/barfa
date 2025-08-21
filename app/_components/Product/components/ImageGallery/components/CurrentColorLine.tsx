import { CurrentColorLineProps } from "../types";

function CurrentColorLine({ activeImage }: CurrentColorLineProps) {
  return (
    <div className="hidden items-center gap-2 font-medium lg:flex">
      <span className="shrink-0">{activeImage.fa}</span>
      <div
        className="h-1.5 w-full rounded-full"
        style={{ backgroundColor: activeImage.value }}
      ></div>
    </div>
  );
}

export default CurrentColorLine;
