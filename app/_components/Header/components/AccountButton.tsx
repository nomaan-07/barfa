import { Button } from "@heroui/button";
import { LucideUser } from "lucide-react";
import Link from "next/link";

function AccountButton() {
  return (
    <Button as={Link} href="/account" isIconOnly variant="light">
      <LucideUser className="size-5" />
    </Button>
  );
}

export default AccountButton;
