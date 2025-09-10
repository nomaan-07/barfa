"use client";

import { Card, CardBody } from "@heroui/card";
import { usePathname } from "next/navigation";
import AccountMenu from "./AccountMenu";

function AccountSidebar() {
  const pathname = usePathname();

  return (
    <Card className="hidden w-64 shrink-0 lg:block">
      <CardBody>
        <AccountMenu pathname={pathname} size="lg" />
      </CardBody>
    </Card>
  );
}

export default AccountSidebar;
