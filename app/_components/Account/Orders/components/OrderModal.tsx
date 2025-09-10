import DrawerCloseButton from "@/app/_components/Common/DrawerCloseButton";
import FinalPrice from "@/app/_components/Common/FinalPrice";
import { convertToPersian } from "@/app/_utils/helper";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { LucideEye } from "lucide-react";
import { OrderModalProps } from "../types";
import OrderProductList from "./OrderProductList";

function OrderModal({ order, currentOrder, totalProducts }: OrderModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { id, price, products } = order;

  return (
    <>
      <Button
        color="warning"
        size="sm"
        variant="flat"
        startContent={<LucideEye size={16} />}
        className="w-full sm:w-fit"
        onPress={onOpen}
      >
        مشاهده جزییات
      </Button>
      <Modal
        size="3xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <DrawerCloseButton position="left" isAbsolute onClose={onClose} />
              <ModalHeader className="flex flex-col gap-1">
                <span className="text-lg font-bold">
                  سفارش شماره {convertToPersian(currentOrder)}
                </span>

                <span className="text-primary text-sm">
                  شماره پیگیری: #{convertToPersian(id)}
                </span>
                <span className="text-warning text-sm">در حال آماده سازی</span>
              </ModalHeader>
              <ModalBody className="max-h-[60vh] overflow-y-auto">
                <div className="text-secondary flex items-center justify-between px-4 font-medium">
                  <span>تعداد کل محصولات</span>
                  <span>{convertToPersian(totalProducts)}</span>
                </div>

                <OrderProductList products={products} />
              </ModalBody>
              <ModalFooter className="items-center justify-between">
                <span className="text-lg font-bold">مبلغ کل</span>
                <FinalPrice price={price} variant="panel" />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default OrderModal;
