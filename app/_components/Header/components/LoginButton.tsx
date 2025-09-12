import { Button } from "@heroui/button";
import { LucideLogIn } from "lucide-react";
import Link from "next/link";

function LoginButton() {
  return (
    <Button
      as={Link}
      href="/login"
      isIconOnly
      variant="light"
      aria-label="ورود به حساب کاربری"
    >
      <LucideLogIn className="size-5" />
    </Button>
  );
}

export default LoginButton;
