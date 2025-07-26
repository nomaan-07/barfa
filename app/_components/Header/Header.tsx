import { Navbar, NavbarBrand, NavbarContent } from "@heroui/react";
import Logo from "../Logo";
import HeaderButtons from "./HeaderButtons";
import Navigation from "./Navigation";

function Header() {
  return (
    <Navbar
      shouldHideOnScroll
      isBlurred={false}
      maxWidth="xl"
      className="hidden lg:flex"
      isBordered
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarContent>
          <Navigation />
        </NavbarContent>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderButtons />
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
