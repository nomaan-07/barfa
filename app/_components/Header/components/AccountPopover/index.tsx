import { Button } from "@heroui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { LucideUser2 } from "lucide-react";
import { useState } from "react";
import AccountPopoverCard from "./components/AccountPopoverCard";

function AccountPopover() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <Popover placement="bottom-start" isOpen={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" onPress={toggleOpen}>
          <LucideUser2 className="size-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <AccountPopoverCard onClose={handleClose} />
      </PopoverContent>
    </Popover>
  );
}

export default AccountPopover;
