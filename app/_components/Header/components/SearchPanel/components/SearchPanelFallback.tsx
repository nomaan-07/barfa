import { Button } from "@heroui/button";
import { LucideSearch } from "lucide-react";

function SearchPanelFallback() {
  return (
    <>
      <Button isIconOnly variant="light" className="hidden lg:flex">
        <LucideSearch className="size-5" />
      </Button>
      <Button isIconOnly variant="bordered" className="border-small lg:hidden">
        <LucideSearch className="size-5" />
      </Button>
    </>
  );
}

export default SearchPanelFallback;
