import { Button } from "@heroui/button";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";

interface SwiperButtonProps {
  className: string;
  direction: "prev" | "next";
}

function SwiperButton({ className, direction }: SwiperButtonProps) {
  const isPrevButton = direction === "prev";

  const Icon = isPrevButton ? LucideChevronRight : LucideChevronLeft;
  const positionClass = isPrevButton ? "right-1" : "left-1";

  return (
    <Button
      isIconOnly
      className={`absolute top-2/5 z-40 hidden lg:flex ${className} ${positionClass}`}
    >
      <Icon />
    </Button>
  );
}
export default SwiperButton;
