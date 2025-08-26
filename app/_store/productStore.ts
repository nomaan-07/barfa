import { create } from "zustand";
import { Color, ProductType } from "../_utils/types";

type GalleryImage = Color & {
  url: string;
};

interface ProductStoreState extends Omit<ProductType, "created_at"> {
  galleryImages: GalleryImage[];
  selectedColor: string;
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
  setSelectedColor: (color: string) => void;
}

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

  galleryImages: [],
  selectedColor: "",
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

    set({
      ...productData,
      insurancePrice,
      galleryImages,
      selectedQuantity: 1,
      hasInsurance: false,
      selectedColor: galleryImages[0]?.en || "",
      status: "success",
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

  toggleInsurance: () =>
    set((state) => ({
      hasInsurance: !state.hasInsurance,
    })),

  setSelectedColor: (color) =>
    set(() => ({
      selectedColor: color,
    })),
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
  const { discounted_price, selectedQuantity, hasInsurance, insurancePrice } =
    state;

  const quantityPrice = discounted_price * selectedQuantity;

  return hasInsurance ? quantityPrice + insurancePrice : quantityPrice;
};

export const selectorTotalOriginalPrice = (state: ProductStoreState) =>
  state.price * state.selectedQuantity;
