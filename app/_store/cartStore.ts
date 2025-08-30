import { create } from "zustand";
import { persist } from "zustand/middleware";
import { calculateFinalPrice, calculateOriginalPrice } from "../_utils/helper";
import { CartProduct } from "../_utils/types";

interface cartState {
  products: CartProduct[];
  existingProduct: (id: number) => CartProduct | undefined;
  removeProduct: (id: number) => void;
  toggleInsurance: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  addProduct: (product: CartProduct) => void;
  clearCart: () => void;
}

export const useCartStore = create<cartState>()(
  persist(
    (set, get) => ({
      products: [],

      existingProduct: (id) =>
        get().products.find((product) => product.id === id),

      removeProduct: (id) => {
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        }));
      },

      toggleInsurance: (id) => {
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id
              ? { ...product, hasInsurance: !product.hasInsurance }
              : product,
          ),
        }));
      },

      increaseQuantity: (id) => {
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id
              ? { ...product, selectedQuantity: product.selectedQuantity + 1 }
              : product,
          ),
        }));
      },

      decreaseQuantity: (id) => {
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id && product.selectedQuantity > 1
              ? { ...product, selectedQuantity: product.selectedQuantity - 1 }
              : product,
          ),
        }));
      },

      addProduct: (product) => {
        set({
          products: [...get().products, product],
        });
      },

      clearCart: () => set({ products: [] }),
    }),
    {
      name: "cart-storage",
    },
  ),
);

export const selectorCartCount = (state: cartState) => state.products.length;

export const selectorProductFinalPrice = (state: cartState, id: number) => {
  const product = state.existingProduct(id);

  return product
    ? calculateFinalPrice(
        product.discountedPrice,
        product.selectedQuantity,
        product.hasInsurance,
        product.insurancePrice,
      )
    : 0;
};

export const selectorProductOriginalPrice = (state: cartState, id: number) => {
  const product = state.existingProduct(id);

  return product
    ? calculateOriginalPrice(product.price, product.selectedQuantity)
    : 0;
};

export const selectorTotalPrice = (state: cartState) =>
  state.products.reduce(
    (sum, product) => sum + selectorProductFinalPrice(state, product.id),
    0,
  );
