import { Button } from "@heroui/button";
import { NavbarItem } from "@heroui/navbar";
import clsx from "clsx";
import Link from "next/link";
import { items } from "./items";
import SubMenu from "./SubMenu";

function Navigation() {
  return (
    <>
      {items.map((item) => (
        <NavbarItem
          key={item.id}
          className={clsx(item.subItems && "group relative")}
        >
          <Button
            as={Link}
            variant="light"
            href={item.href}
            startContent={item.icon}
            className={clsx(
              item.subItems &&
                "after:bg-primary relative after:absolute after:right-0 after:bottom-0 after:h-px after:w-0 after:transition-all group-hover:after:w-full",
            )}
          >
            {item.title}
          </Button>
          {item.subItems && <SubMenu variant="desktop" items={item.subItems} />}
        </NavbarItem>
      ))}
    </>
  );
}

export default Navigation;
