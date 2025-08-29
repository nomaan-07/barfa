"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Suspense, useState } from "react";
import Logo from "../../Logo";
import CartPanel from "./CartPanel";
import MobileMenu from "./MobileMenu";
import SearchPanel from "./SearchPanel";
import SearchPanelFallback from "./SearchPanel/components/SearchPanelFallback";

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
        <Suspense fallback={<SearchPanelFallback />}>
          <SearchPanel />
        </Suspense>
        <CartPanel />
      </NavbarContent>

      <NavbarMenu>
        <MobileMenu onCloseMenu={onCloseMenu} />
      </NavbarMenu>
    </Navbar>
  );
}

export default MobileHeader;
