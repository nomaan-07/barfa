import { NavbarMenuItem } from "@heroui/navbar";
import Link from "next/link";
import SubMenu from "../../SubMenu";
import { items } from "../../items";
import MobilMenuAuthActions from "./MobilMenuAuthActions";

interface MobileMenuProps {
  onCloseMenu: () => void;
}

function MobileMenu({ onCloseMenu }: MobileMenuProps) {
  return (
    <>
      {items.map((item) => (
        <NavbarMenuItem
          key={item.id}
          className="not-first:mt-6"
          onClick={onCloseMenu}
        >
          <Link href={item.href} className="flex items-center gap-3">
            {item.icon}
            {item.title}
          </Link>
          {item.subItems && <SubMenu variant="mobile" items={item.subItems} />}
        </NavbarMenuItem>
      ))}

      <MobilMenuAuthActions />
    </>
  );
}

export default MobileMenu;
