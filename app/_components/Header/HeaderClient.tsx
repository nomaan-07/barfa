"use client";

import { useUserStore } from "@/app/_store/userStore";
import { FavoriteProducts } from "@/app/_utils/types";
import { Navbar, NavbarBrand, NavbarContent } from "@heroui/navbar";
import clsx from "clsx";
import { useEffect } from "react";
import { useScrollDirection } from "../../_hooks/useScrollDirection";
import Logo from "../Logo";
import HeaderButtons from "./components/HeaderButtons";
import Navigation from "./components/Navigation";

interface HeaderProps {
  user:
    | {
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        favorites: FavoriteProducts;
      }
    | undefined;
}

function HeaderClient({ user }: HeaderProps) {
  const setInitialUser = useUserStore((state) => state.setInitialUser);

  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (user) setInitialUser(user);
  }, [user, setInitialUser]);

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
        <HeaderButtons />
      </NavbarContent>
    </Navbar>
  );
}

export default HeaderClient;
