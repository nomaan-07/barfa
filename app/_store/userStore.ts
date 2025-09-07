import { create } from "zustand";

interface initialState {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

interface UserStoreState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isInitialized: boolean;
}

interface Actions {
  setInitialUser: (user: initialState) => void;
  clearUser: () => void;
}
export const useUserStore = create<UserStoreState & Actions>((set) => ({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  isInitialized: false,

  setInitialUser: (user) => {
    set({
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      phone: user.phone,
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
