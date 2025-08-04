"use client";

import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { LucideLogIn } from "lucide-react";
import Link from "next/link";

function LoginButton() {
  return (
    <>
      <Tooltip content="ثبت نام | ورود">
        <Button as={Link} href="/login" isIconOnly variant="light">
          <LucideLogIn className="size-5" />
        </Button>
      </Tooltip>
    </>
  );
}

export default LoginButton;
