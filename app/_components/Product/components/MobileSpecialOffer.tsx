import { useProductsStore } from "@/app/_store/productStore";
import { convertToPersian } from "@/app/_utils/helper";

function MobileSpecialOffer() {
  const discountedPercent = useProductsStore((state) => state.discountPercent);

  if (discountedPercent === 0) return null;

  return (
    <div className="bg-danger flex h-10 items-center justify-between p-5 text-lg font-semibold text-white lg:hidden">
      <span>پیشنهاد ویژه</span>
      <span>{convertToPersian(discountedPercent)}٪</span>
    </div>
  );
}

export default MobileSpecialOffer;
