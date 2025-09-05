import DrawerCloseButton from "@/app/_components/Common/DrawerCloseButton";
import { logoutUser } from "@/app/_lib/actions";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/react";
import { LucideLogOut } from "lucide-react";

interface AccountPopoverLogoutProps {
  onClosePopover: () => void;
}
function AccountPopoverLogout({ onClosePopover }: AccountPopoverLogoutProps) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  function handleClose() {
    onClose();
    onClosePopover();
  }

  return (
    <>
      <div
        onClick={onOpen}
        className="hover:bg-danger-100 hover:text-danger m-1 flex h-12 cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 transition-colors"
      >
        <LucideLogOut size={20} />
        <span>خروج از حساب کاربری</span>
      </div>
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
            <span> از حساب کاربری خارج می‌شوید؟</span>
            <DrawerCloseButton onClose={handleClose} />
          </ModalHeader>
          <ModalFooter>
            <Button onPress={handleClose}>انصراف</Button>
            <Button color="danger" onPress={logoutUser}>
              خروج از حساب
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AccountPopoverLogout;
