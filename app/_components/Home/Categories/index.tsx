import {
  LucideHeadphones,
  LucideLaptop2,
  LucidePackage,
  LucideSmartphone,
  LucideTablet,
  LucideWatch,
} from "lucide-react";
import SectionHeader from "../../Common/SectionHeader";
import CategoryCard from "./components/CategoryCard";

const categories = [
  {
    id: 1,
    name: "موبایل",
    icon: LucideSmartphone,
    gradient: "from-indigo-500 to-blue-500",
    href: "/category/mobile",
    underLineColor: "via-indigo-500",
    shadow: "shadow-indigo-300",
  },
  {
    id: 2,
    name: "لپ تاپ",
    icon: LucideLaptop2,
    gradient: "from-cyan-500 to-teal-400",
    href: "/category/laptop",
    underLineColor: "via-cyan-500",
    shadow: "shadow-cyan-300",
  },
  {
    id: 3,
    name: "هدفون",
    icon: LucideHeadphones,
    gradient: "from-purple-500 to-pink-500",
    href: "/category/headphone",
    underLineColor: "via-purple-500",
    shadow: "shadow-purple-300",
  },
  {
    id: 4,
    name: "تبلت",
    icon: LucideTablet,
    gradient: "from-emerald-500 to-green-400",
    href: "/category/tablet",
    underLineColor: "via-emerald-500",
    shadow: "shadow-emerald-300",
  },
  {
    id: 5,
    name: "ساعت هوشمند",
    icon: LucideWatch,
    gradient: "from-pink-500 to-rose-400",
    href: "/category/smartwatch",
    underLineColor: "via-pink-500",
    shadow: "shadow-pink-300",
  },
  {
    id: 6,
    name: "لوازم جانبی",
    icon: LucidePackage,
    gradient: "from-orange-500 to-amber-400",
    href: "/category/accessories",
    underLineColor: "via-orange-500",
    shadow: "shadow-orange-300",
  },
];

const Categories = () => {
  return (
    <section>
      <SectionHeader title="خرید بر اساس دسته‌بندی" />

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-y-12 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            Icon={category.icon}
            gradient={category.gradient}
            href={category.href}
            name={category.name}
            shadow={category.shadow}
            underlineColor={category.underLineColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
