"use client";

import { Button } from "@heroui/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
} from "@heroui/drawer";
import { Input } from "@heroui/input";
import { Tooltip } from "@heroui/tooltip";
import { useDisclosure } from "@heroui/use-disclosure";
import { LucideSearch, LucideX } from "lucide-react";

function SearchButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Tooltip content="جستجو" showArrow placement="bottom" offset={0}>
        <Button
          isIconOnly
          variant="light"
          onPress={onOpen}
          className="hidden lg:flex"
        >
          <LucideSearch className="size-5" />
        </Button>
      </Tooltip>
      <Button
        isIconOnly
        variant="bordered"
        className="border-small lg:hidden"
        onPress={onOpen}
      >
        <LucideSearch className="size-5" />
      </Button>
      <Drawer
        hideCloseButton
        placement="top"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader>
                <Input
                  className="mx-auto max-w-120"
                  placeholder="محصول مورد نظر خود را جستجو کنید."
                  autoFocus
                  classNames={{
                    inputWrapper: [
                      "px-0",
                      "focus-within:ring-1",
                      "focus-within:ring-default",
                    ],
                  }}
                  startContent={
                    <Tooltip content="بستن">
                      <Button variant="light" isIconOnly onPress={onClose}>
                        <LucideX className="size-5" />
                      </Button>
                    </Tooltip>
                  }
                  endContent={
                    <Tooltip content="جستجو">
                      <Button
                        isIconOnly
                        variant="light"
                        // TODO: Implement search
                        onPress={() => console.log("search")}
                      >
                        <LucideSearch className="size-5" />
                      </Button>
                    </Tooltip>
                  }
                />
              </DrawerHeader>
              {/* TODO: Show search result */}
              <DrawerBody>Search results</DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SearchButton;
