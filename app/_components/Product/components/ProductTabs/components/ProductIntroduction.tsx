import { useProductsStore } from "@/app/_store/productStore";
import clsx from "clsx";
import { useState } from "react";
import ToggleButton from "./ToggleButton";

function ProductIntroduction() {
  const [isOpen, setIsOpen] = useState(false);
  const introduction = useProductsStore((state) => state.introduction);

  const onToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="space-y-4">
      <div
        className={clsx(
          "overflow-hidden px-4 text-xs leading-7 sm:text-sm sm:leading-8",
          !isOpen && "line-clamp-4 h-28 sm:line-clamp-3 sm:h-24",
        )}
      >
        {introduction}
      </div>

      <ToggleButton
        openText="مشاهده بیشتر"
        isOpen={isOpen}
        onToggle={onToggle}
      />
    </div>
  );
}

export default ProductIntroduction;
