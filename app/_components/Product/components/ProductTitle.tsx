import { useProductsStore } from "@/app/_store/productStore";
import clsx from "clsx";

interface ProductTitleProps {
  variant: "mobile" | "desktop";
}
function ProductTitle({ variant }: ProductTitleProps) {
  const titleFa = useProductsStore((state) => state.titleFa);
  const titleEn = useProductsStore((state) => state.titleEn);

  return (
    <div
      className={clsx("w-full", {
        "lg:hidden": variant === "mobile",
        "hidden lg:block": variant === "desktop",
      })}
    >
      <h1 className="mb-2 text-sm leading-6 font-bold sm:mb-4 sm:text-lg sm:leading-7 md:text-xl md:leading-8 lg:text-2xl lg:leading-9">
        {titleFa}
      </h1>
      <p
        className={clsx(
          "text-default-400 text-xs sm:text-sm",
          variant === "mobile" && "text-left",
        )}
      >
        {titleEn}
      </p>
    </div>
  );
}

export default ProductTitle;
