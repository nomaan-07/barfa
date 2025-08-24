import { create } from "zustand";
import {
  Color,
  Colors,
  ImageSources,
  InsuranceType,
  ProductBrand,
  ProductCategory,
  ProductMainFeatures,
  ProductSpecs,
  ProductType,
} from "../_utils/types";

type GalleryImage = Color & {
  url: string;
};

interface ProductStoreState {
  id: number;
  imageSources: ImageSources;
  colors: Colors;
  price: number;
  discountPercent: number;
  mainFeatures: ProductMainFeatures;
  specifications: ProductSpecs;
  titleFa: string;
  titleEn: string;
  introduction?: string;
  category: ProductCategory;
  warranty: string;
  brand: ProductBrand;
  quantity: number;
  discountedPrice: number;
  insurance: InsuranceType;

  galleryImages: GalleryImage[];
  selectedColor: string;
  selectedQuantity: number;
  hasInsurance: boolean;
  insurancePrice: number;
}

type VoidFn = () => void;

interface Actions {
  setInitialProduct: (productData: ProductType) => void;
  increaseQuantity: VoidFn;
  decreaseQuantity: VoidFn;
  toggleInsurance: VoidFn;
  setSelectedColor: (color: string) => void;
}

export const useProductsStore = create<ProductStoreState & Actions>((set) => ({
  id: 1,
  imageSources: { main: "", colors: {} },
  colors: [],
  price: 0,
  discountPercent: 0,
  mainFeatures: {},
  specifications: {},
  titleFa: "",
  titleEn: "",
  introduction: "",
  category: { en: "", fa: "" },
  warranty: "",
  brand: { en: "", fa: "" },
  quantity: 0,
  discountedPrice: 0,
  insurance: {
    title: "",
    price: 0,
    percent: 0,
  },

  galleryImages: [],
  selectedColor: "",
  selectedQuantity: 1,
  hasInsurance: false,
  insurancePrice: 0,

  setInitialProduct: (productData: ProductType) => {
    const {
      image_sources,
      discount_percent,
      main_features,
      title_fa,
      title_en,
      discounted_price,
      insurance,
      colors,
    } = productData;

    const insurancePrice = insurance.price
      ? insurance.price
      : insurance.percent
        ? (insurance.percent / 100) * discounted_price
        : 0;

    const galleryImages = colors.map((color) => ({
      ...color,
      url: image_sources.colors[color.en],
    }));

    set({
      ...productData,
      imageSources: image_sources,
      discountPercent: discount_percent,
      mainFeatures: main_features,
      titleFa: title_fa,
      titleEn: title_en,
      discountedPrice: discounted_price,
      colors,
      insurance,

      insurancePrice,
      galleryImages,
      selectedQuantity: 1,
      hasInsurance: false,
      selectedColor: "",
    });
  },

  increaseQuantity: () =>
    set((state) => ({
      selectedQuantity: state.selectedQuantity + 1,
    })),

  decreaseQuantity: () =>
    set((state) => ({
      selectedQuantity: state.selectedQuantity - 1,
    })),

  toggleInsurance: () => {
    set((state) => ({
      hasInsurance: !state.hasInsurance,
    }));
  },

  setSelectedColor: (color) => {
    set(() => ({
      selectedColor: color,
    }));
  },
}));

export const selectorCurrentImage = (state: ProductStoreState) => {
  const { galleryImages, selectedColor } = state;
  return galleryImages.find((image) => image.en === selectedColor) ?? null;
};

export const selectorActiveIndex = (state: ProductStoreState) => {
  const { galleryImages, selectedColor } = state;
  const index = galleryImages.findIndex((image) => image.en === selectedColor);

  return index >= 0 ? index : 0;
};

export const selectorTotalFinalPrice = (state: ProductStoreState) => {
  const { discountedPrice, selectedQuantity, hasInsurance, insurancePrice } =
    state;

  const quantityPrice = discountedPrice * selectedQuantity;

  return hasInsurance ? quantityPrice + insurancePrice : quantityPrice;
};

export const selectorTotalOriginalPrice = (state: ProductStoreState) =>
  state.price * state.selectedQuantity;
