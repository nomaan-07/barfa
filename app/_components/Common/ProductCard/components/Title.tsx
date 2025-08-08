import Link from "next/link";

interface TitleProps {
  title: string;
  id: number;
}

function Title({ title, id }: TitleProps) {
  return (
    <Link
      href={`product/${id}`}
      className="hover:text-primary line-clamp-2 min-h-12 transition-colors"
    >
      {title}
    </Link>
  );
}

export default Title;
