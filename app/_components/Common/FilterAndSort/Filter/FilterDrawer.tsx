"use client";

import { useQueryFilters } from "@/app/_hooks/useQueryFilters";
import { Button } from "@heroui/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import { useDisclosure } from "@heroui/react";
import DrawerCloseButton from "../Drawer/DrawerCloseButton";
import DrawerOpenButton from "../Drawer/DrawerOpenButton";
import FilterPanel from "./FilterPanel";

function FilterDrawer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { clearAll, hasAnyFilter } = useQueryFilters();

  function handleClearFilters(onClose: () => void) {
    onClose();
    clearAll();
  }

  return (
    <div className="lg:hidden">
      <DrawerOpenButton
        onOpen={onOpen}
        hasAnyFilter={hasAnyFilter()}
        variation="filter"
      >
        فیلتر
      </DrawerOpenButton>

      <Drawer
        hideCloseButton
        placement="right"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="full"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="border-b-default-300 items-center justify-between border-b text-base">
                <h2>فیلترها</h2>
                <DrawerCloseButton onClose={onClose} />
              </DrawerHeader>
              <DrawerBody className="gap-0 divide-y">
                <FilterPanel />
              </DrawerBody>
              <DrawerFooter className="border-t-default-300 grid grid-cols-2 gap-2 border-t">
                <Button color="primary" onPress={onClose}>
                  مشاهده محصولات
                </Button>
                <Button
                  color={hasAnyFilter() ? "danger" : "default"}
                  onPress={() => handleClearFilters(onClose)}
                  disabled={!hasAnyFilter()}
                >
                  حذف فیلتر‌ها
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default FilterDrawer;
