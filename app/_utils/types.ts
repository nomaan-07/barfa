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

export type ProductCategory = {
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

export type ProductMainFeatures = Record<string, string>;
export type ProductSpecs = Record<string, Record<string, string | string[]>>;

export type InsuranceType = {
  title: string;
  price?: number;
  percent?: number;
};

export type ProductType = ListProduct & {
  title_en: string;
  introduction?: string;
  category: ProductCategory;
  main_features: ProductMainFeatures;
  specifications: ProductSpecs;
  warranty: string;
  insurance: InsuranceType;
};

export type SearchPanelProductType = {
  title_fa: string;
  id: number;
  main: string;
};

export type SearchPanelProductsType = SearchPanelProductType[];

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

type BaseSearchParams = {
  sort?: string;
  discounted?: string;
  available?: string;
  minPrice?: string;
  maxPrice?: string;
  brand?: string | string[];
  color?: string | string[];
};

export type CategorySearchParams = Promise<BaseSearchParams>;

export type SearchPageSearchParams = Promise<
  BaseSearchParams & {
    query: string;
  }
>;

export type SortChangeHandler = (sort: string, onClose?: () => void) => void;

export type CartProduct = {
  id: number;
  cartId: string;
  imageSrc: string;
  title: string;
  color: Color;
  insuranceTitle: string;
  insurancePrice: number;
  hasInsurance: boolean;
  warranty: string;
  quantity: number;
  selectedQuantity: number;
  discountPercent: number;
  discountedPrice: number;
  price: number;
};
