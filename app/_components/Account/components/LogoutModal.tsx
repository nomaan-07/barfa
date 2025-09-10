import { useLogout } from "@/app/_hooks/useLogout";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Spinner } from "@heroui/spinner";
import DrawerCloseButton from "../../Common/DrawerCloseButton";

interface LogoutModalProps {
  afterLogout?: () => void;
  logout: ReturnType<typeof useLogout>;
}

function LogoutModal({ afterLogout, logout }: LogoutModalProps) {
  const { isLoading, isOpen, onClose, onOpenChange, handleLogout } = logout;

  function handleClose() {
    onClose();
    afterLogout?.();
  }

  return (
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
            onPress={() => handleLogout(afterLogout)}
            fullWidth
          >
            {isLoading ? <Spinner color="white" size="sm" /> : "خروج از حساب"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default LogoutModal;
