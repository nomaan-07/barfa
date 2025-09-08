"use client";

import DrawerCloseButton from "@/app/_components/Common/DrawerCloseButton";
import { logoutUser } from "@/app/_lib/actions";
import { useCartStore } from "@/app/_store/cartStore";
import { useUserStore } from "@/app/_store/userStore";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { Spinner } from "@heroui/spinner";
import { addToast } from "@heroui/toast";
import { LucideLogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AccountButtonSize, getButtonClasses, IconSize } from "../utils";

interface AccountLogoutProps {
  onClosePopover?: () => void;
  size: AccountButtonSize;
}

function AccountLogout({ onClosePopover, size }: AccountLogoutProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const router = useRouter();
  const clearCart = useCartStore((state) => state.clearCart);
  const clearUser = useUserStore((state) => state.clearUser);

  function handleClose() {
    onClose();
    onClosePopover?.();
  }

  async function handleLogout() {
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
      handleClose();
      setIsLoading(false);
    }
  }

  return (
    <>
      <Button
        color="danger"
        startContent={<LucideLogOut size={IconSize(size)} />}
        variant="light"
        fullWidth
        size={size}
        radius="sm"
        onPress={onOpen}
        className={getButtonClasses(size)}
      >
        خروج از حساب کاربری
      </Button>

      <Modal
        isOpen={isOpen}
        backdrop="blur"
        onOpenChange={onOpenChange}
        hideCloseButton
        classNames={{
          backdrop: "z-200000",
          wrapper: "z-200000",
        }}
      >
        <ModalContent>
          <ModalHeader className="items-center justify-between">
            <span>خروج از حساب کاربری</span>
            <DrawerCloseButton onClose={handleClose} />
          </ModalHeader>
          <ModalBody className="text-right">
            با خروج از حساب کاربری،‌ سبد خرید شما حذف می‌شود،‌ آیا مطمئن هستید؟
          </ModalBody>
          <ModalFooter>
            <Button onPress={handleClose} fullWidth>
              انصراف
            </Button>
            <Button
              isDisabled={isLoading}
              color="danger"
              onPress={handleLogout}
              fullWidth
            >
              {isLoading ? <Spinner color="white" size="sm" /> : "خروج از حساب"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AccountLogout;
