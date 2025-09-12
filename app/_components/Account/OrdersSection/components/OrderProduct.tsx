import { convertToPersian } from "@/app/_utils/helper";
import Image from "next/image";
import Link from "next/link";
import { OrderProductProps } from "../types";

function OrderProduct({ product }: OrderProductProps) {
  const { id, imageSrc, title, color, quantity } = product;

  return (
    <Link
      href={`/product/${id}`}
      className="hover:bg-primary-50 flex flex-col gap-3 p-4 transition-colors sm:flex-row sm:items-center sm:gap-4"
    >
      <Image src={imageSrc} alt={title} width={80} height={80} />

      <div className="flex flex-1 flex-col">
        <p className="font-medium">{title}</p>
        <p className="text-default-500 text-sm">رنگ: {color}</p>
      </div>

      <div className="text-start sm:text-end">
        <p className="text-default-500 text-sm">
          تعداد: {convertToPersian(quantity)}
        </p>
      </div>
    </Link>
  );
}

export default OrderProduct;
