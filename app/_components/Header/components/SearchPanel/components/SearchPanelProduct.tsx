import { SearchPanelProductType } from "@/app/_utils/types";
import { Image } from "@heroui/image";
import Link from "next/link";

interface SearchPanelProductProps {
  product: SearchPanelProductType;
}

function SearchPanelProduct({ product }: SearchPanelProductProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="md:hover:bg-primary-50 shadow-small grid grid-cols-[3rem_1fr] gap-2 rounded-xl p-2 transition-colors select-none sm:grid-cols-[4rem_1fr]"
    >
      <Image
        alt={product.title_fa}
        className="block size-12 shrink-0 sm:size-16"
        src={product.main}
      />
      <div className="flex items-center justify-center overflow-hidden">
        <p className="h-5 truncate text-xs sm:text-sm">{product.title_fa}</p>
      </div>
    </Link>
  );
}

export default SearchPanelProduct;
