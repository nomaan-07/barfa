import { useCartStore } from "@/app/_store/cartStore";
import { convertToPersian } from "@/app/_utils/helper";
import Image from "next/image";

function CheckoutProducts() {
  const products = useCartStore((state) => state.products);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {products.map((product, index) => (
        <div key={product.cartId} className="shadow-small rounded-md p-1">
          <Image
            alt={product.title}
            src={product.imageSrc}
            width={64}
            height={64}
            priority={index === 0}
          />
          <div className="text-center text-sm">
            {convertToPersian(product.selectedQuantity)} عدد
          </div>
        </div>
      ))}
    </div>
  );
}

export default CheckoutProducts;
