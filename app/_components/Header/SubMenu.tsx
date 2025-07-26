"use client";

import { Listbox, ListboxItem } from "@heroui/react";
import Link from "next/link";
import { ReactNode } from "react";

interface SubItem {
  id: string;
  title: string;
  href: string;
  icon?: ReactNode;
}

interface SubMenuProps {
  variation: "desktop" | "mobile";
  items: SubItem[];
}

function SubMenu({ variation = "desktop", items }: SubMenuProps) {
  const isMobile = variation === "mobile";
  return (
    <div
      className={
        isMobile
          ? "mt-3"
          : "invisible absolute top-9.5 right-0 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100"
      }
    >
      <div
        className={
          isMobile
            ? "px-4"
            : "border-small rounded-small border-default-300 bg-background w-32 px-1 py-2"
        }
      >
        <Listbox aria-label="products">
          {items.map((item) => (
            <ListboxItem
              variant="flat"
              key={item.id}
              as={Link}
              href={item.href}
              startContent={item.icon}
              className={
                isMobile
                  ? "mt-3 flex items-center gap-3 data-[hover=true]:bg-transparent"
                  : ""
              }
            >
              {item.title}
            </ListboxItem>
          ))}
        </Listbox>
      </div>
    </div>
  );
}

export default SubMenu;
