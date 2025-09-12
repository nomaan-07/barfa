"use client";

import { useLogout } from "@/app/_hooks/useLogout";
import { Button } from "@heroui/button";
import { LucideLogOut } from "lucide-react";
import AccountLogout from "./AccountLogout";

function MobileLogoutButton() {
  const logout = useLogout();

  return (
    <>
      <Button
        className="h-12 flex-col items-center justify-center gap-1 text-[10px] select-none sm:text-sm"
        variant="light"
        startContent={<LucideLogOut size={16} />}
        size="sm"
        radius="lg"
        onPress={logout.onOpen}
      >
        خروج از حساب
      </Button>
      <AccountLogout logout={logout} />
    </>
  );
}

export default MobileLogoutButton;
