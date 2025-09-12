import { create } from "zustand";
import { calculateFinalPrice, calculateOriginalPrice } from "../_utils/helper";
import { Color, ProductType } from "../_utils/types";

type GalleryImage = Color & {
  url: string;
};

interface ProductStoreState extends Omit<ProductType, "created_at"> {
  cartId: string;
  galleryImages: GalleryImage[];
  selectedColorEn: string;
  selectedQuantity: number;
  hasInsurance: boolean;
  insurancePrice: number;
  status: "loading" | "success";
}

type VoidFn = () => void;

interface Actions {
  setInitialProduct: (productData: ProductType) => void;
  increaseQuantity: VoidFn;
  decreaseQuantity: VoidFn;
  toggleInsurance: VoidFn;
  selectColorVariant: (color: string) => void;
}

// FIXME: Rename to useProductStore
export const useProductsStore = create<ProductStoreState & Actions>((set) => ({
  id: 0,
  image_sources: { main: "", colors: {} },
  colors: [],
  price: 0,
  discount_percent: 0,
  main_features: {},
  specifications: {},
  title_fa: "",
  title_en: "",
  introduction: "",
  category: { en: "", fa: "" },
  warranty: "",
  brand: { en: "", fa: "" },
  quantity: 0,
  discounted_price: 0,
  insurance: {
    title: "",
    price: 0,
    percent: 0,
  },

  cartId: "",
  galleryImages: [],
  selectedColorEn: "",
  selectedQuantity: 1,
  hasInsurance: false,
  insurancePrice: 0,
  status: "loading",

  setInitialProduct: (productData) => {
    const insurancePrice = productData.insurance.price
      ? productData.insurance.price
      : productData.insurance.percent
        ? (productData.insurance.percent / 100) * productData.discounted_price
        : 0;

    const galleryImages = productData.colors.map((color) => ({
      ...color,
      url: productData.image_sources.colors[color.en],
    }));

    const defaultColorEn = galleryImages[0].en ?? "";

    set({
      ...productData,
      cartId: defaultColorEn ? `${productData.id}-${defaultColorEn}` : "",
      insurancePrice,
      galleryImages,
      selectedQuantity: 1,
      hasInsurance: false,
      selectedColorEn: defaultColorEn,
      status: "success",
    });
  },

  increaseQuantity: () =>
    set((state) => ({
      selectedQuantity: state.selectedQuantity + 1,
    })),

  decreaseQuantity: () =>
    set((state) => ({
      selectedQuantity: Math.max(1, state.selectedQuantity - 1),
    })),

  toggleInsurance: () =>
    set((state) => ({
      hasInsurance: !state.hasInsurance,
    })),

  selectColorVariant: (color) =>
    set((state) => ({
      selectedColorEn: color,
      cartId: `${state.id}-${color}`,
      selectedQuantity: 1,
      hasInsurance: false,
    })),
}));

export const selectorCurrentImage = (state: ProductStoreState) => {
  const { galleryImages, selectedColorEn } = state;
  return (
    galleryImages.find((image) => image.en === selectedColorEn) ?? {
      en: "",
      fa: "",
      value: "",
      url: "",
    }
  );
};

export const selectorActiveIndex = (state: ProductStoreState) => {
  const { galleryImages, selectedColorEn } = state;
  const index = galleryImages.findIndex(
    (image) => image.en === selectedColorEn,
  );

  return index >= 0 ? index : 0;
};

export const selectorTotalFinalPrice = (state: ProductStoreState) =>
  calculateFinalPrice(
    state.discounted_price,
    state.selectedQuantity,
    state.hasInsurance,
    state.insurancePrice,
  );

export const selectorProductTotalOriginalPrice = (state: ProductStoreState) =>
  calculateOriginalPrice(state.price, state.selectedQuantity);
