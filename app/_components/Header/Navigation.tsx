import { Button, NavbarItem } from "@heroui/react";
import Link from "next/link";
import SubMenu from "./SubMenu";
import { items } from "./items";

function Navigation() {
  return (
    <>
      {items.map((item) => (
        <NavbarItem
          key={item.id}
          className={item.subItems ? "group relative" : ""}
        >
          <Button
            as={Link}
            variant="light"
            href={item.href}
            startContent={item.icon}
            className={
              item.subItems
                ? "after:bg-primary relative after:absolute after:right-0 after:bottom-0 after:h-px after:w-0 after:transition-all group-hover:after:w-full"
                : ""
            }
          >
            {item.title}
          </Button>
          {item.subItems && (
            <SubMenu variation="desktop" items={item.subItems} />
          )}
        </NavbarItem>
      ))}
    </>
  );
}

export default Navigation;
