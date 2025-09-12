"use client";

import { useLogout } from "@/app/_hooks/useLogout";
import { Button } from "@heroui/button";
import { LucideLogOut } from "lucide-react";
import { AccountButtonSize, getButtonClasses, IconSize } from "../utils";
import AccountLogout from "./AccountLogout";

interface AccountMenuLogoutButtonProps {
  onClosePopover?: () => void;
  size: AccountButtonSize;
}

function AccountMenuLogoutButton({
  onClosePopover,
  size,
}: AccountMenuLogoutButtonProps) {
  const logout = useLogout();

  return (
    <>
      <Button
        color="danger"
        startContent={<LucideLogOut size={IconSize(size)} />}
        variant="light"
        fullWidth
        size={size}
        radius="sm"
        onPress={logout.onOpen}
        className={getButtonClasses(size)}
      >
        خروج از حساب کاربری
      </Button>

      <AccountLogout afterLogout={onClosePopover} logout={logout} />
    </>
  );
}

export default AccountMenuLogoutButton;
