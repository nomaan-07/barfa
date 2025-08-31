import { create } from "zustand";
import { persist } from "zustand/middleware";
import { calculateFinalPrice, calculateOriginalPrice } from "../_utils/helper";
import { CartProduct } from "../_utils/types";

interface cartState {
  products: CartProduct[];
  existingProduct: (id: string) => CartProduct | undefined;
  removeProduct: (id: string) => void;
  toggleInsurance: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  addProduct: (product: CartProduct) => void;
  clearCart: () => void;
}

export const useCartStore = create<cartState>()(
  persist(
    (set, get) => ({
      products: [],

      existingProduct: (id) =>
        get().products.find((product) => product.cartId === id),

      removeProduct: (id) => {
        set((state) => ({
          products: state.products.filter((product) => product.cartId !== id),
        }));
      },

      toggleInsurance: (id) => {
        set((state) => ({
          products: state.products.map((product) =>
            product.cartId === id
              ? { ...product, hasInsurance: !product.hasInsurance }
              : product,
          ),
        }));
      },

      increaseQuantity: (id) => {
        set((state) => ({
          products: state.products.map((product) =>
            product.cartId === id
              ? { ...product, selectedQuantity: product.selectedQuantity + 1 }
              : product,
          ),
        }));
      },

      decreaseQuantity: (id) => {
        set((state) => {
          const product = state.products.find((p) => p.cartId === id);

          if (!product) return state;

          if (product.selectedQuantity === 1) {
            return {
              products: state.products.filter((p) => p.cartId !== id),
            };
          } else {
            return {
              products: state.products.map((p) =>
                p.cartId === id
                  ? { ...p, selectedQuantity: p.selectedQuantity - 1 }
                  : p,
              ),
            };
          }
        });
      },

      addProduct: (product) => {
        const existingProduct = get().existingProduct(product.cartId);

        if (existingProduct) {
          get().increaseQuantity(product.cartId);
        } else {
          set((state) => ({
            products: [...state.products, product],
          }));
        }
      },

      clearCart: () => set({ products: [] }),
    }),
    {
      name: "cart-storage",
    },
  ),
);

export const selectorCartCount = (state: cartState) => state.products.length;

export const selectorProductFinalPrice = (state: cartState, id: string) => {
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

export const selectorProductOriginalPrice = (state: cartState, id: string) => {
  const product = state.existingProduct(id);

  return product
    ? calculateOriginalPrice(product.price, product.selectedQuantity)
    : 0;
};

export const selectorTotalPrice = (state: cartState) =>
  state.products.reduce(
    (sum, product) => sum + selectorProductFinalPrice(state, product.cartId),
    0,
  );
