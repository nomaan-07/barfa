import { Button } from "@heroui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { LucideUser2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AccountPopoverCard from "./components/AccountPopoverCard";

function AccountPopover() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isAccountPage = pathname.startsWith("/account");

  const triggerButton = (
    <Button
      isIconOnly
      variant="light"
      isDisabled={isAccountPage}
      aria-label="باز کردن پنل حساب کاربری"
    >
      <LucideUser2 className="size-5" />
    </Button>
  );

  if (isAccountPage) return triggerButton;

  return (
    <Popover
      placement="bottom-start"
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <PopoverTrigger>{triggerButton}</PopoverTrigger>
      <PopoverContent className="p-1">
        <AccountPopoverCard onClose={() => setIsOpen(false)} />
      </PopoverContent>
    </Popover>
  );
}

export default AccountPopover;
