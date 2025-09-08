import { ACCOUNT_ITEMS } from "@/app/_data/accountItems";
import { Button } from "@heroui/button";
import Link from "next/link";
import { AccountButtonSize, getButtonClasses, IconSize } from "../utils";
import AccountLogout from "./AccountLogout";

interface AccountMenuProps {
  pathname?: string;
  size: AccountButtonSize;
  onClosePopover?: () => void;
}

function AccountMenu({ pathname, size, onClosePopover }: AccountMenuProps) {
  return (
    <div>
      {ACCOUNT_ITEMS.map((item) => (
        <Button
          key={item.id}
          {...(item.href !== pathname && { as: Link, href: item.href })}
          color="primary"
          startContent={<item.Icon size={IconSize(size)} />}
          variant="light"
          fullWidth
          size={size}
          radius="sm"
          className={getButtonClasses(size, item.href === pathname)}
        >
          {item.title}
        </Button>
      ))}
      <AccountLogout size={size} onClosePopover={onClosePopover} />
    </div>
  );
}

export default AccountMenu;
