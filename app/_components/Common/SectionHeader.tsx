import { Button } from "@heroui/button";
import clsx from "clsx";
import { LucideChevronLeft } from "lucide-react";
import Link from "next/link";

type Color = "primary" | "secondary" | "danger" | "success" | "warning";

interface SectionHeaderProps {
  link?: string;
  textColor?: "text-inherit" | "text-white";
  bgColor?: `bg-${Color}` | "bg-default-100";
  title: string;
  buttonColor?: Color | "default";
}

function SectionHeader({
  link,
  bgColor = "bg-default-100",
  textColor = "text-inherit",
  buttonColor = "default",
  title,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-4 flex h-14 items-center justify-between rounded-md px-4 ${bgColor}`}
    >
      <h3 className={clsx("text-xl font-semibold sm:text-2xl", textColor)}>
        {title}
      </h3>
      {link && (
        <Button
          as={Link}
          scroll
          endContent={<LucideChevronLeft className="size-4.5" />}
          variant="light"
          href={link}
          className={`px-0 sm:text-base ${textColor}`}
          color={buttonColor}
        >
          مشاهده بیشتر
        </Button>
      )}
    </div>
  );
}

export default SectionHeader;
