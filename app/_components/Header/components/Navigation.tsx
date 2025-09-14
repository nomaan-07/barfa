import { headerMenuItems } from "@/app/_data/headerMenuItems";
import { Button } from "@heroui/button";
import { NavbarItem } from "@heroui/navbar";
import clsx from "clsx";
import Link from "next/link";
import SubMenu from "./SubMenu";

function Navigation() {
  return (
    <>
      {headerMenuItems.map(({ id, href, icon, title, subItems }) => (
        <NavbarItem key={id} className={clsx(subItems && "group relative")}>
          <Button
            as={Link}
            variant="light"
            href={href}
            startContent={icon}
            className={clsx(
              subItems &&
                "after:bg-primary relative after:absolute after:right-0 after:bottom-0 after:h-px after:w-0 after:transition-all group-hover:after:w-full",
            )}
          >
            {title}
          </Button>
          {subItems && <SubMenu variant="desktop" items={subItems} />}
        </NavbarItem>
      ))}
    </>
  );
}

export default Navigation;
