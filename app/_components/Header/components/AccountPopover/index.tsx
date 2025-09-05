import { Button } from "@heroui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { LucideUser2 } from "lucide-react";
import AccountPopoverCard from "./components/AccountPopoverCard";
import { useState } from "react";

interface AccountPopoverProps {
  user: {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
  };
}

function AccountPopover({ user }: AccountPopoverProps) {
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
        <AccountPopoverCard user={user} onClose={handleClose} />
      </PopoverContent>
    </Popover>
  );
}

export default AccountPopover;
