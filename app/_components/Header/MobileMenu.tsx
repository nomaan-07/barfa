import { NavbarMenuItem } from "@heroui/react";
import { LucideLogIn } from "lucide-react";
import Link from "next/link";
import { items } from "./items";
import SubMenu from "./SubMenu";

function MobileMenu() {
  return (
    <>
      {items.map((item) => (
        <NavbarMenuItem key={item.id} className="not-first:mt-6">
          <Link href={item.href} className="flex items-center gap-3">
            {item.icon}
            {item.title}
          </Link>
          {item.subItems && (
            <SubMenu variation="mobile" items={item.subItems} />
          )}
        </NavbarMenuItem>
      ))}
      <NavbarMenuItem className="mt-6">
        <Link href="/login" className="flex items-center gap-3">
          <LucideLogIn className="size-5" />
          ثبت نام | ورود
        </Link>
      </NavbarMenuItem>
    </>
  );
}

export default MobileMenu;
