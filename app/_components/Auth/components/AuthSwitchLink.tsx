"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface AuthSwitchLinkProps {
  variant: "login" | "signup";
}

function AuthSwitchLink({ variant }: AuthSwitchLinkProps) {
  const searchParams = useSearchParams();
  const backTo = searchParams.get("backTo");

  const target = variant === "login" ? "/signup" : "/login";
  const href = backTo ? `${target}?backTo=${backTo}` : target;

  return (
    <div className="flex items-center justify-center gap-1 text-sm">
      <span>
        {variant === "login"
          ? "حساب کاربری ندارید؟‌"
          : "قبلا ثبت نام کرده‌اید؟"}
      </span>
      <Link href={href} className="text-primary">
        {variant === "login" ? "ثبت نام کنید" : "وارد شوید"}
      </Link>
    </div>
  );
}

export default AuthSwitchLink;
