import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
} from "@heroui/react";
import Logo from "../Logo";
import CartButton from "./CartButton";
import MobileMenu from "./MobileMenu";
import SearchButton from "./SearchButton";

function MobileHeader() {
  return (
    <Navbar
      isBlurred={false}
      className="*:first:grid *:first:grid-cols-[2rem_1fr_6rem] *:first:gap-3 lg:hidden"
      isBordered
    >
      <NavbarContent>
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarBrand className="justify-center">
        <Logo />
      </NavbarBrand>
      <NavbarContent justify="end">
        <SearchButton />
        <CartButton />
      </NavbarContent>

      <NavbarMenu>
        <MobileMenu />
      </NavbarMenu>
    </Navbar>
  );
}

export default MobileHeader;
