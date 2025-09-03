import Link from "next/link";

interface AuthSwitchLinkProps {
  variant: "login" | "signup";
}

function AuthSwitchLink({ variant }: AuthSwitchLinkProps) {
  return (
    <div className="flex items-center gap-1 text-sm">
      <span>
        {variant === "login"
          ? "حساب کاربری ندارید؟‌"
          : "قبلا ثبت نام کرده‌اید؟"}
      </span>
      <Link
        href={variant === "login" ? "/signup" : "/login"}
        className="text-primary"
      >
        {variant === "login" ? "ثبت نام کنید" : "وارد شوید"}
      </Link>
    </div>
  );
}

export default AuthSwitchLink;
