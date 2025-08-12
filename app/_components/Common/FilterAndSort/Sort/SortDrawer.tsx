import { SORT_OPTIONS } from "@/app/_utils/constants";
import { SortChangeHandler } from "@/app/_utils/types";
import { Button } from "@heroui/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
} from "@heroui/drawer";
import { useDisclosure } from "@heroui/react";
import clsx from "clsx";
import { LucideCheck, LucideSliders, LucideX } from "lucide-react";

interface SortDrawerProps {
  currentSort: string;
  onSortChange: SortChangeHandler;
}

function SortDrawer({ currentSort, onSortChange }: SortDrawerProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="lg:hidden">
      <Button
        onPress={onOpen}
        variant="light"
        className="border-r-default-200 rounded-none border-r"
        startContent={<LucideSliders className="size-4.5" />}
      >
        <span>
          {currentSort === "default"
            ? "مرتب سازی"
            : SORT_OPTIONS.find((option) => option.value === currentSort)!.name}
        </span>
      </Button>
      <Drawer
        hideCloseButton
        placement="bottom"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="border-b-default-300 items-center justify-between border-b text-base">
                <p>مرتب سازی بر اساس</p>
                <Button variant="light" isIconOnly onPress={onClose}>
                  <LucideX className="size-5" />
                </Button>
              </DrawerHeader>
              <DrawerBody className="gap-0 divide-y">
                {SORT_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    className={clsx(
                      "border-b-default-200 flex items-center justify-between py-3 select-none",
                      {
                        "text-primary": currentSort === option.value,
                        "text-default-500": currentSort !== option.value,
                      },
                    )}
                    disabled={currentSort === option.value}
                    onClick={() => onSortChange(option.value, onClose)}
                  >
                    {option.name}
                    {currentSort === option.value && (
                      <span className="flex w-10 justify-center">
                        <LucideCheck className="size-5" />
                      </span>
                    )}
                  </button>
                ))}
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default SortDrawer;
