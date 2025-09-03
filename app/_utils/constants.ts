export const SWIPER_PRODUCTS_LIMIT = 10;
export const SEARCH_PANEL_PRODUCTS_LIMIT = 20;
export const LOW_PRODUCT_QUANTITY = 3;

export const TABLES = {
  PRODUCTS: "barfa-products",
  POPULAR_BRANDS: "barfa-popular-brands",
  BANNERS: "barfa-home-banners",
  USERS: "barfa-users",
};

export const TABLE_FIELDS = {
  LIST_PRODUCT:
    "id, created_at, title_fa, image_sources, price, discount_percent, discounted_price, colors, quantity, brand",
  SEARCH_PANEL_PRODUCTS: "id, title_fa, image_sources->>main",
  POPULAR_BRANDS: "id, image_src, link, name",
  BANNERS: "id, image_src, link, title",
};

export const VALID_CATEGORIES = [
  { en: "all", fa: "همه‌ی محصولات" },
  { en: "mobile", fa: "موبایل" },
  { en: "laptop", fa: "لپ تاپ" },
  { en: "tablet", fa: "تبلت" },
  { en: "headphone", fa: "هدفون" },
  { en: "accessories", fa: "لوازم جانبی" },
  { en: "smartwatch", fa: "ساعت هوشمند" },
];

export const VALID_SEARCHPARAMS = [
  "sort",
  "discounted",
  "available",
  "minPrice",
  "maxPrice",
  "brand",
  "color",
];

export const VALID_PRODUCTS_SORTS = [
  "default",
  "cheapest",
  "expensive",
  "newest",
  "oldest",
];

export const SORT_OPTIONS = [
  {
    name: "پیش‌فرض",
    value: "default",
  },
  {
    name: "ارزان‌ترین",
    value: "cheapest",
  },
  {
    name: "گران‌ترین",
    value: "expensive",
  },
  {
    name: "جدیدترین‌",
    value: "newest",
  },
  {
    name: "قدیمی‌ترین",
    value: "oldest",
  },
];
