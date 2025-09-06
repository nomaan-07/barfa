import DrawerCloseButton from "@/app/_components/Common/DrawerCloseButton";
import { logoutUser } from "@/app/_lib/actions";
import { useCartStore } from "@/app/_store/cartStore";
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
import { useState } from "react";

interface AccountPopoverLogoutProps {
  onClosePopover: () => void;
}
function AccountPopoverLogout({ onClosePopover }: AccountPopoverLogoutProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const clearCart = useCartStore((state) => state.clearCart);

  function handleClose() {
    onClose();
    onClosePopover();
  }

  async function handleLogout() {
    setIsLoading(true);
    try {
      await logoutUser();
      clearCart();
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
      <button
        aria-label="خروج از حساب کاربری"
        onClick={onOpen}
        className="hover:bg-danger-100 hover:text-danger m-1 flex h-12 cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 transition-colors"
      >
        <LucideLogOut size={20} />
        <span>خروج از حساب کاربری</span>
      </button>

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
            <Button onPress={handleClose}>انصراف</Button>
            <Button
              isDisabled={isLoading}
              color="danger"
              onPress={handleLogout}
            >
              {isLoading ? <Spinner color="white" size="sm" /> : "خروج از حساب"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AccountPopoverLogout;
