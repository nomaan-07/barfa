"use client";

import { Navbar, NavbarBrand, NavbarContent } from "@heroui/navbar";
import clsx from "clsx";
import { useScrollDirection } from "../../_hooks/useScrollDirection";
import Logo from "../Logo";
import HeaderButtons from "./components/HeaderButtons";
import Navigation from "./components/Navigation";

interface HeaderProps {
  isUserLoggedIn: boolean;
}

function HeaderClient({ isUserLoggedIn }: HeaderProps) {
  const scrollDirection = useScrollDirection();

  return (
    <Navbar
      isBlurred={false}
      maxWidth="xl"
      className={clsx("hidden transition-transform duration-500 lg:flex", {
        "-translate-y-full": scrollDirection === "down",
        "translate-y-0": scrollDirection === "up",
      })}
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
        <HeaderButtons isUserLoggedIn={isUserLoggedIn} />
      </NavbarContent>
    </Navbar>
  );
}

export default HeaderClient;
