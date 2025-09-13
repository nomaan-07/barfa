interface Item {
  id: string;
  imageSrc: string;
  title: string;
  caption: string;
  href: string;
  buttonContent: string;
}

export const heroItems: Item[] = [
  {
    id: "1",
    imageSrc: "/hero/products.jpg",
    title: "برفا؛ تکنولوژی در دستان شما",
    caption: "محصولات متنوع، قیمت رقابتی، و ضمانت اصل بودن کالا.",
    href: "/category/all",
    buttonContent: "مشاهده همه محصولات",
  },
  {
    id: "2",
    imageSrc: "/hero/smartphones.jpg",
    title: "گوشی رویایی شما همین‌جاست!",
    caption: "جدیدترین مدل‌های گوشی با بهترین قیمت‌ها.",
    href: "/category/mobile",
    buttonContent: "مشاهده گوشی‌ها",
  },
  {
    id: "3",
    imageSrc: "/hero/laptops.jpg",
    title: "لپ‌تاپ حرفه‌ای برای شما",
    caption: "بهترین لپ‌تاپ‌ها برای کار، بازی و خلق ایده‌های جدید.",
    href: "/category/laptop",
    buttonContent: "بررسی لپ‌تاپ‌ها",
  },
  {
    id: "4",
    imageSrc: "/hero/headphone.jpg",
    title: "صدای شفاف، کیفیت بی‌نظیر",
    caption: "هدفون‌های با کیفیت عالی برای تجربه صوتی متفاوت.",
    href: "/category/headphone",
    buttonContent: "مشاهده هدفون‌ها",
  },
];
