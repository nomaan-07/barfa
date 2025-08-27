import { Card, CardBody } from "@heroui/card";
import clsx from "clsx";
import Link from "next/link";

interface CategoryCardProps {
  name: string;
  href: string;
  gradient: string;
  shadow: string;
  underlineColor: string;
  Icon: React.ElementType;
}
function CategoryCard({
  name,
  href,
  gradient,
  shadow,
  underlineColor,
  Icon,
}: CategoryCardProps) {
  return (
    <Card
      key={name}
      isHoverable
      as={Link}
      href={href}
      className="group border-default-100 overflow-hidden rounded-2xl border bg-white/60 shadow-md backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <CardBody className="flex flex-col items-center justify-center p-2 text-center sm:p-6">
        <div
          className={clsx(
            "flex size-16 items-center justify-center rounded-full bg-gradient-to-br shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl sm:size-20",
            gradient,
            shadow,
          )}
        >
          <Icon className="size-8 text-white drop-shadow-md sm:size-10" />
        </div>

        <p className="text-default-700 group-hover:text-default-900 mt-4 text-sm font-extrabold tracking-tight transition-colors duration-300 sm:text-base md:text-lg">
          {name}
        </p>

        {/* hover underline effect */}
        <span
          className={clsx(
            "mt-1 block h-0.5 w-0 bg-gradient-to-r from-transparent to-transparent opacity-0 transition-all duration-500 group-hover:w-12 group-hover:opacity-100",
            underlineColor,
          )}
        ></span>
      </CardBody>
    </Card>
  );
}

export default CategoryCard;
