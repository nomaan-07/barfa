import { create } from "zustand";
import { FavoriteProducts } from "../_utils/types";

interface InitialUserState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  favorites: FavoriteProducts;
}

type UserStoreState = InitialUserState & {
  isInitialized: boolean;
};

interface Actions {
  setInitialUser: (user: InitialUserState) => void;
  clearUser: () => void;
}
export const useUserStore = create<UserStoreState & Actions>((set) => ({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  favorites: [],
  isInitialized: false,

  setInitialUser: (user) => {
    set({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      favorites: user.favorites,
      isInitialized: true,
    });
  },

  clearUser: () => {
    set({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      isInitialized: false,
    });
  },
}));
