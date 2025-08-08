type Color = {
  name: string;
  value: string;
};

export type ImageSources = {
  main: string;
  colors: Record<string, string>;
};

export type ProductCardData = {
  id: number;
  title_fa: string;
  image_sources: ImageSources;
  colors: Record<string, Color>;
  price: number;
  discount_percent: number;
};

export type Product = ProductCardData & {
  id: number;
  title: string;
  imageSrc: string;
  price: number;
  discountPercent: number;
  link: string;
};

export type Brand = {
  id: number;
  name: string;
  link: string;
  image_src: string;
};
