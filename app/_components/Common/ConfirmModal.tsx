import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Spinner } from "@heroui/spinner";
import DrawerCloseButton from "./DrawerCloseButton";

interface ConfirmModalProps {
  title: string;
  caption: string;
  confirmButtonText: string;
  isOpen: boolean;
  isLoading: boolean;
  onOpenChange: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

function ConfirmModal({
  isOpen,
  isLoading,
  title,
  caption,
  confirmButtonText,
  onOpenChange,
  onCancel,
  onConfirm,
}: ConfirmModalProps) {
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
          <span>{title}</span>
          <DrawerCloseButton onClose={onCancel} />
        </ModalHeader>
        <ModalBody className="text-right">{caption}</ModalBody>
        <ModalFooter>
          <Button onPress={onCancel} fullWidth>
            انصراف
          </Button>
          <Button
            isDisabled={isLoading}
            color="danger"
            onPress={onConfirm}
            fullWidth
          >
            {isLoading ? (
              <Spinner color="white" size="sm" />
            ) : (
              confirmButtonText
            )}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ConfirmModal;
