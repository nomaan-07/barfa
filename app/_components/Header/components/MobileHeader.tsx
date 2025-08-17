"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { useState } from "react";
import Logo from "../../Logo";
import CartButton from "./CartButton";
import MobileMenu from "./MobileMenu";
import SearchButton from "./SearchButton";

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onCloseMenu = () => setIsMenuOpen(false);

  return (
    <Navbar
      isBlurred={false}
      className="*:first:grid *:first:grid-cols-[2rem_1fr_6rem] *:first:gap-3 lg:hidden"
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
        />
      </NavbarContent>
      <NavbarBrand className="justify-center">
        <Logo />
      </NavbarBrand>
      <NavbarContent justify="end">
        <SearchButton />
        <CartButton />
      </NavbarContent>

      <NavbarMenu>
        <MobileMenu onCloseMenu={onCloseMenu} />
      </NavbarMenu>
    </Navbar>
  );
}

export default MobileHeader;
