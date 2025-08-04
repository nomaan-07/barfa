import { Image } from "@heroui/react";
import Link from "next/link";
import SectionHeader from "../../Common/SectionHeader";

interface Category {
  id: string;
  name: string;
  imageSrc: string;
  link: string;
}

// FIXME: Images from supabase storage
const categories: Category[] = [
  {
    id: "1",
    name: "موبایل",
    imageSrc: "/hero/smartphones.png",
    link: "/categories/smartphones",
  },
  {
    id: "2",
    name: "لپ تاپ",
    imageSrc: "/hero/laptops.png",
    link: "/categories/laptops",
  },
  {
    id: "3",
    name: "هدفون",
    imageSrc: "/hero/headphone.png",
    link: "/categories/earbuds",
  },
  {
    id: "4",
    name: "تبلت",
    imageSrc: "/hero/smartphones-mobile.png",
    link: "/categories/tablets",
  },
  {
    id: "5",
    name: "ساعت هوشمند",
    imageSrc: "/hero/headphone-mobile.png",
    link: "/categories/smartwatches",
  },
  {
    id: "6",
    name: "لوازم جانبی",
    imageSrc: "/hero/laptops.png",
    link: "/categories/accessories",
  },
];

const Categories = () => {
  return (
    <section>
      <SectionHeader title="خرید بر اساس دسته‌بندی" />

      <div className="grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {categories.map((category) => (
          <Link key={category.id} href={category.link} className="relative">
            <Image
              alt={category.name}
              className="h-32 object-cover sm:h-40"
              shadow="sm"
              src={category.imageSrc}
              width="100%"
            />

            <div className="absolute top-32 right-5 left-5 rounded-b-xl text-center shadow-sm sm:top-40">
              <p>{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
