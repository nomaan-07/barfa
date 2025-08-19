import DrawerCloseButton from "@/app/_components/Common/DrawerCloseButton";
import { useSearchPanel } from "@/app/_contexts/SearchPanelContext";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
} from "@heroui/drawer";
import SearchInput from "./SearchInput";
import SearchPanelProducts from "./SearchPanelProducts";

function SearchPanelDrawer() {
  const { isOpen, onOpenChange, onClose } = useSearchPanel();

  return (
    <Drawer
      hideCloseButton
      placement="top"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      classNames={{
        base: "md:max-w-160 data-[placement=right]:m-auto sm:data-[placement=left]:m-auto min-h-screen max-h-screen sm:min-h-auto",
      }}
    >
      <DrawerContent>
        <DrawerHeader className="gap-2">
          <SearchInput />
          <DrawerCloseButton onClose={onClose} />
        </DrawerHeader>
        <DrawerBody>
          <SearchPanelProducts />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default SearchPanelDrawer;
