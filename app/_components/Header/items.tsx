import {
  LucideBadgePercent,
  LucideHeadphones,
  LucideInfo,
  LucideLaptop,
  LucideMessageCircle,
  LucidePackage2,
  LucideSmartphone,
  LucideTablet,
  LucideTrendingUp,
} from "lucide-react";
import { ReactNode } from "react";

export interface SubItem {
  id: string;
  title: string;
  href: string;
  icon: ReactNode;
}

interface Item extends SubItem {
  subItems?: SubItem[];
}

const iconsStyles = "size-5 lg:size-4";

export const items: Item[] = [
  {
    id: "1",
    title: "محصولات",
    href: "/products",
    icon: <LucidePackage2 className={iconsStyles} />,
    subItems: [
      {
        id: "11",
        title: "موبایل",
        href: "/category/mobile",
        icon: <LucideSmartphone className={iconsStyles} />,
      },
      {
        id: "12",
        title: "لپ تاپ",
        href: "/category/laptop",
        icon: <LucideLaptop className={iconsStyles} />,
      },
      {
        id: "13",
        title: "تبلت",
        href: "/category/tablet",
        icon: <LucideTablet className={iconsStyles} />,
      },
      {
        id: "14",
        title: "هدفون",
        href: "/category/headphone",
        icon: <LucideHeadphones className={iconsStyles} />,
      },
    ],
  },
  {
    id: "2",
    title: "پیشنهاد ویژه",
    href: "/offers",
    icon: <LucideBadgePercent className={iconsStyles} />,
  },
  {
    id: "3",
    title: "پرفروش‌ها",
    href: "/products",
    icon: <LucideTrendingUp className={iconsStyles} />,
  },
  {
    id: "4",
    title: "درباره ما",
    href: "/about-us",
    icon: <LucideInfo className={iconsStyles} />,
  },
  {
    id: "5",
    title: "ارتباط با ما",
    href: "/contact-us",
    icon: <LucideMessageCircle className={iconsStyles} />,
  },
];
