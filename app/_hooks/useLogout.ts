"use client";

import { addToast, useDisclosure } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { logoutUser } from "../_lib/actions";
import { useCartStore } from "../_store/cartStore";
import { useUserStore } from "../_store/userStore";

export function useLogout() {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const router = useRouter();
  const clearCart = useCartStore((state) => state.clearCart);
  const clearUser = useUserStore((state) => state.clearUser);

  async function handleLogout(afterLogout?: () => void) {
    setIsLoading(true);
    try {
      await logoutUser();
      clearCart();
      clearUser();
      router.push("/");
      addToast({
        variant: "bordered",
        color: "success",
        title: "با موفقیت از حساب کاربری خود خارج شدید",
      });
    } catch {
      addToast({
        variant: "bordered",
        color: "danger",
        title: "خروج از حساب کاربری ناموفق بود",
      });
    } finally {
      onClose();
      setIsLoading(false);
      afterLogout?.();
    }
  }

  return { isLoading, isOpen, onOpen, onClose, onOpenChange, handleLogout };
}
