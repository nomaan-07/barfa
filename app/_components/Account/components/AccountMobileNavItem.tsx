import { Button } from "@heroui/button";
import Link from "next/link";
import { JSX } from "react";

interface AccountMobileNavItemProps {
  title: string;
  icon: JSX.Element;
  href: string;
  isActive: boolean;
}

function AccountMobileNavItem({
  title,
  href,
  icon,
  isActive,
}: AccountMobileNavItemProps) {
  return (
    <Button
      {...(!isActive && { as: Link, href })}
      className="h-12 flex-col items-center justify-center gap-1 text-[10px] select-none sm:text-sm"
      variant={isActive ? "flat" : "light"}
      color={isActive ? "primary" : "default"}
      startContent={icon}
      size="sm"
      radius="lg"
    >
      {title}
    </Button>
  );
}

export default AccountMobileNavItem;
