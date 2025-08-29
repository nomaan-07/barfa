"use client";

import { Listbox, ListboxItem } from "@heroui/listbox";
import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

interface SubItem {
  id: string;
  title: string;
  href: string;
  icon?: ReactNode;
}

interface SubMenuProps {
  variant: "desktop" | "mobile";
  items: SubItem[];
}

function SubMenu({ variant, items }: SubMenuProps) {
  return (
    <div
      className={clsx({
        "mt-3": variant === "mobile",
        "invisible absolute top-9.5 right-0 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100":
          variant === "desktop",
      })}
    >
      <div
        className={clsx({
          "px-4": variant === "mobile",
          "border-small rounded-small border-default-300 bg-background w-32 px-1 py-2":
            variant === "desktop",
        })}
      >
        <Listbox aria-label="products">
          {items.map((item) => (
            <ListboxItem
              variant="flat"
              key={item.id}
              as={Link}
              href={item.href}
              startContent={item.icon}
              className={clsx(
                variant === "mobile" &&
                  "mt-3 flex items-center gap-3 data-[hover=true]:bg-transparent",
              )}
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
