"use client";

import { Card, CardBody } from "@heroui/card";
import { usePathname } from "next/navigation";
import AccountMenu from "./AccountMenu";

function AccountSidebar() {
  const pathname = usePathname();

  return (
    <Card className="shrink-0 md:w-64">
      <CardBody>
        <AccountMenu pathname={pathname} size="lg" />
      </CardBody>
    </Card>
  );
}

export default AccountSidebar;
