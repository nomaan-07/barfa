type Color = {
  name: string;
  value: string;
};

export type ImageSources = {
  main: string;
  colors: Record<string, string>;
};

export type ProductsVariation = "list" | "swiper";

export type ListProduct = {
  created_at: string;
  id: number;
  title_fa: string;
  image_sources: ImageSources;
  colors: Record<string, Color>;
  price: number;
  discount_percent: number;
  quantity?: number;
  brand?: {
    en: string;
    fa: string;
  };
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

export type Brand = {
  id: number;
  name: string;
  link: string;
  image_src: string;
};

export type CategoryParams = Promise<{ slug: string }>;

export type CategorySearchParams = Promise<{
  sort?: string;
  discounted?: string;
}>;
