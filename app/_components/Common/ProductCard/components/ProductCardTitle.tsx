import Link from "next/link";

interface ProductCardTitleProps {
  title: string;
  id: number;
}

function ProductCardTitle({ title, id }: ProductCardTitleProps) {
  return (
    <Link
      href={`/product/${id}`}
      className="hover:text-primary line-clamp-2 min-h-12 transition-colors"
    >
      {title}
    </Link>
  );
}

export default ProductCardTitle;
