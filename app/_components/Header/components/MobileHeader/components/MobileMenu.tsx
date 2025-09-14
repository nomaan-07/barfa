import { headerMenuItems } from "@/app/_data/headerMenuItems";
import { NavbarMenuItem } from "@heroui/navbar";
import Link from "next/link";
import SubMenu from "../../SubMenu";
import MobilMenuAuthActions from "./MobilMenuAuthActions";

interface MobileMenuProps {
  onCloseMenu: () => void;
}

function MobileMenu({ onCloseMenu }: MobileMenuProps) {
  return (
    <>
      {headerMenuItems.map(({ id, href, icon, title, subItems }) => (
        <NavbarMenuItem
          key={id}
          className="not-first:mt-6"
          onClick={onCloseMenu}
        >
          <Link href={href} className="flex items-center gap-3">
            {icon}
            {title}
          </Link>
          {subItems && <SubMenu variant="mobile" items={subItems} />}
        </NavbarMenuItem>
      ))}

      <MobilMenuAuthActions onCloseMenu={onCloseMenu} />
    </>
  );
}

export default MobileMenu;
