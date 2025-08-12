export const SWIPER_PRODUCTS_LIMIT = 10;

export const TABLES = {
  PRODUCTS: "barfa-products",
  POPULAR_BRANDS: "barfa-popular-brands",
  BANNERS: "barfa-home-banners",
};

const BASE_PRODUCT_FIELDS =
  "id,created_at, title_fa, image_sources, price, discount_percent, discounted_price, colors";

export const TABLE_FIELDS = {
  SWIPER_PRODUCT: BASE_PRODUCT_FIELDS,
  LIST_PRODUCT: `${BASE_PRODUCT_FIELDS}, quantity, brand`,
  POPULAR_BRANDS: "id, image_src, link, name",
  BANNERS: "id, image_src, link, title",
};

export const VALID_CATEGORY_SLUGS = [
  "all",
  "discounted",
  "mobile",
  "laptop",
  "tablet",
  "headphone",
  "accessories",
  "smartwatch",
];

export const VALID_SEARCHPARAMS = ["sort", "discounted"];

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
