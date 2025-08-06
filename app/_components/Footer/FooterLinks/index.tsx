import FooterLinksColumn from "./FooterLinksColumn";

const footerSections = [
  {
    title: "دسترسی سریع",
    items: [
      { title: "خانه", href: "/" },
      { title: "محصولات", href: "/products" },
      { title: "دسته‌بندی‌ها", href: "/categories" },
      { title: "سبد خرید", href: "/cart" },
      { title: "درباره ما", href: "/about" },
    ],
  },
  {
    title: "خدمات مشتریان",
    items: [
      { title: "پرسش‌های متداول", href: "/faq" },
      { title: "راهنمای خرید", href: "/guide" },
      { title: "پیگیری سفارش", href: "/track-order" },
      { title: "تماس با ما", href: "/contact" },
    ],
  },
  {
    title: "قوانین و مقررات",
    items: [
      { title: "قوانین استفاده", href: "/terms" },
      { title: "حریم خصوصی", href: "/privacy" },
      { title: "قوانین بازگشت کالا", href: "/returns" },
      { title: "شرایط گارانتی", href: "/warranty" },
    ],
  },
  {
    title: "لینک‌های مفید",
    items: [
      { title: "بلاگ", href: "/blog" },
      { title: "فرصت‌های شغلی", href: "/careers" },
      { title: "همکاری با ما", href: "/partnership" },
      { title: "نقشه سایت", href: "/sitemap" },
    ],
  },
];

function FooterLinks() {
  return (
    <div className="flex flex-wrap justify-between gap-6">
      {footerSections.map((section, index) => (
        <FooterLinksColumn section={section} key={index} />
      ))}
    </div>
  );
}

export default FooterLinks;
