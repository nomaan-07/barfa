import { Button } from "@heroui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { LucideUser2 } from "lucide-react";
import AccountPopoverCard from "./components/AccountPopoverCard";

interface AccountPopoverProps {
  user: {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
  };
}

function AccountPopover({ user }: AccountPopoverProps) {
  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Button isIconOnly variant="light">
          <LucideUser2 className="size-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <AccountPopoverCard user={user} />
      </PopoverContent>
    </Popover>
  );
}

export default AccountPopover;
