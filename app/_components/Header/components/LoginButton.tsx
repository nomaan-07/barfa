"use client";

import { Button } from "@heroui/button";
import { LucideLogIn } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function LoginButton() {
  const pathname = usePathname();

  return (
    <Button
      as={Link}
      href={`/login?backTo=${pathname}`}
      isIconOnly
      variant="light"
      aria-label="ورود به حساب کاربری"
    >
      <LucideLogIn className="size-5" />
    </Button>
  );
}

export default LoginButton;
