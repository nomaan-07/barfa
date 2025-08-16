export type ProductsVariation = "list" | "swiper";

export type Color = { en: string; fa: string; value: string };

export type Colors = Color[];

export type ImageSources = {
  main: string;
  colors: Record<string, string>;
};

export type ProductBrand = {
  en: string;
  fa: string;
};

export type ListProduct = {
  created_at: string;
  id: number;
  title_fa: string;
  image_sources: ImageSources;
  colors: Colors;
  price: number;
  discount_percent: number;
  discounted_price: number;
  quantity: number;
  brand: ProductBrand;
};

export type Product = ListProduct & {
  title_en: string;
  introduction: string;

  category: {
    en: string;
    fa: string;
  };
};

export type Banner = {
  id: number;
  title: string;
  link: string;
  image_src: string;
};

export type PopularBrand = {
  id: number;
  name: string;
  link: string;
  image_src: string;
};

export type CategoryParams = Promise<{ slug: string }>;

export type CategorySearchParams = Promise<{
  sort?: string;
  discounted?: string;
  available?: string;
  minPrice?: string;
  maxPrice?: string;
  brand?: string;
  color?: string;
}>;

export type SortChangeHandler = (sort: string, onClose?: () => void) => void;
