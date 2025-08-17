import { Button } from "@heroui/button";
import clsx from "clsx";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";

interface SwiperButtonProps {
  className: string;
  direction: "prev" | "next";
}

function SwiperButton({ className, direction }: SwiperButtonProps) {
  const isPrevButton = direction === "prev";

  const Icon = isPrevButton ? LucideChevronRight : LucideChevronLeft;

  return (
    <Button
      isIconOnly
      className={clsx(
        "absolute top-2/5 z-40 hidden lg:flex",
        className,
        isPrevButton ? "right-1" : "left-1",
      )}
    >
      <Icon />
    </Button>
  );
}
export default SwiperButton;
