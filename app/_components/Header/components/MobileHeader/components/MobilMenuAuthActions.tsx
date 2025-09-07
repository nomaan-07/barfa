import { useUserStore } from "@/app/_store/userStore";
import { NavbarMenuItem } from "@heroui/navbar";
import { LucideLogIn, LucideUserCog2 } from "lucide-react";
import Link from "next/link";

function MobilMenuAuthActions() {
  const isUser = useUserStore((state) => state.isInitialized);

  const Icon = isUser ? LucideUserCog2 : LucideLogIn;

  return (
    <NavbarMenuItem className="mt-6">
      <Link
        href={isUser ? "/account" : "/login"}
        className="flex items-center gap-3"
      >
        <Icon size={20} />
        {isUser ? "حساب کاربری" : "ثبت نام | ورود"}
      </Link>
    </NavbarMenuItem>
  );
}

export default MobilMenuAuthActions;
