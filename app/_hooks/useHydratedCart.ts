import { useEffect, useState } from "react";
import { useCartStore } from "../_store/cartStore";

export function useHydratedCart() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    useCartStore.persist.rehydrate()?.then(() => setHydrated(true));
  }, []);

  return hydrated;
}
