"use client";

import { Navbar, NavbarBrand, NavbarContent } from "@heroui/navbar";
import { useScrollDirection } from "../_hooks/useScrollDirection";
import Logo from "../Logo";
import HeaderButtons from "./HeaderButtons";
import Navigation from "./Navigation";

function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <Navbar
      isBlurred={false}
      maxWidth="xl"
      className="hidden transition-transform duration-500 lg:flex"
      isBordered
      style={{
        transform:
          scrollDirection === "down" ? "translateY(-100%)" : "translateY(0",
      }}
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
