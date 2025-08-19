import { useSearchPanel } from "@/app/_contexts/SearchPanelContext";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { LucideSearch } from "lucide-react";

function SearchButton() {
  const { onSearch } = useSearchPanel();

  return (
    <Tooltip content="جستجو">
      <Button isIconOnly variant="light" onPress={onSearch}>
        <LucideSearch className="size-5" />
      </Button>
    </Tooltip>
  );
}

export default SearchButton;
