import { useSearchPanel } from "@/app/_contexts/SearchPanelContext";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { LucideSearch } from "lucide-react";

function SearchPanelOpenButton() {
  const { onOpen } = useSearchPanel();

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
    </>
  );
}

export default SearchPanelOpenButton;
