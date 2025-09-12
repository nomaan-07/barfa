import { useSearchPanel } from "@/app/_contexts/SearchPanelContext";
import { Button } from "@heroui/button";
import { LucideSearch } from "lucide-react";

function SearchPanelOpenButton() {
  const { onOpen } = useSearchPanel();

  return (
    <>
      <Button
        isIconOnly
        variant="light"
        onPress={onOpen}
        className="hidden lg:flex"
        aria-label="باز کردن پنل جستجو"
      >
        <LucideSearch className="size-5" />
      </Button>

      <Button
        isIconOnly
        variant="bordered"
        className="border-small lg:hidden"
        onPress={onOpen}
        aria-label="باز کردن پنل جستجو"
      >
        <LucideSearch className="size-5" />
      </Button>
    </>
  );
}

export default SearchPanelOpenButton;
