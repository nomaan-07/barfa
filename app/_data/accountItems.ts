import { LucideHeart, LucideShoppingBag, LucideUserCog2 } from "lucide-react";

export const ACCOUNT_ITEMS = [
  {
    id: 1,
    title: "حساب کاربری",
    href: "/account",
    Icon: LucideUserCog2,
  },
  {
    id: 2,
    title: "سفارش‌ها",
    href: "/account/orders",
    Icon: LucideShoppingBag,
  },
  {
    id: 3,
    title: "مورد علاقه‌ها",
    href: "/",
    Icon: LucideHeart,
  },
];
