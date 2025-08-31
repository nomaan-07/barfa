"use client";

import { Button } from "@heroui/button";
import { LucideLogIn } from "lucide-react";
import Link from "next/link";

function LoginButton() {
  return (
    <Button as={Link} href="/login" isIconOnly variant="light">
      <LucideLogIn className="size-5" />
    </Button>
  );
}

export default LoginButton;
