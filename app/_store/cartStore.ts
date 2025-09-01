import { create } from "zustand";
import { persist } from "zustand/middleware";
import { calculateFinalPrice, calculateOriginalPrice } from "../_utils/helper";
import { CartProductType } from "../_utils/types";

interface cartState {
  products: CartProductType[];
  existingProduct: (id: string) => CartProductType | undefined;
  removeProduct: (id: string) => void;
  toggleInsurance: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  addProduct: (product: CartProductType) => void;
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
      skipHydration: true,
    },
  ),
);

export const selectorCartCount = (state: cartState) => state.products.length;

export const selectorCartProductFinalPrice = (state: cartState, id: string) => {
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

export const selectorCartProductOriginalPrice = (
  state: cartState,
  id: string,
) => {
  const product = state.existingProduct(id);

  return product
    ? calculateOriginalPrice(product.price, product.selectedQuantity)
    : 0;
};

export const selectorCartTotalPrice = (state: cartState) =>
  state.products.reduce(
    (sum, product) =>
      sum + selectorCartProductFinalPrice(state, product.cartId),
    0,
  );
