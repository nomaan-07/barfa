import {
  selectorCurrentImage,
  useProductsStore,
} from "@/app/_store/productStore";
import { Button } from "@heroui/button";
import { Drawer, DrawerBody, DrawerContent } from "@heroui/drawer";
import { Image, useDisclosure } from "@heroui/react";
import { LucideChevronUp } from "lucide-react";
import AddToCartButton from "../../Common/AddToCartButton";
import DrawerCloseButton from "../../Common/DrawerCloseButton";
import QuantityText from "../../Common/QuantityText";
import CurrentColorLine from "./CurrentColorLine";
import Insurance from "./Insurance";
import ProductChips from "./ProductChips";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";
import QuantitySelector from "./QuantitySelector";

function MobilePurchaseBar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const quantity = useProductsStore((state) => state.quantity);
  const currentImage = useProductsStore(selectorCurrentImage);

  if (quantity === 0) return null;

  return (
    <div className="border-default-200 fixed inset-x-0 bottom-0 z-40 space-y-3 border-t bg-white p-3 lg:hidden">
      <Button
        color="success"
        className="mx-auto w-full text-white sm:w-auto"
        endContent={<LucideChevronUp />}
        onPress={onOpen}
      >
        مشاهده‌ی جزئیات خرید
      </Button>

      <Drawer
        hideCloseButton
        placement="bottom"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="xl"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerBody>
                <div className="mx-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-6">
                  <div className="flex w-full">
                    <DrawerCloseButton onClose={onClose} />
                  </div>

                  <div className="flex w-full items-center gap-2">
                    <Image
                      src={currentImage?.url}
                      alt={currentImage?.fa}
                      className="max-h-26"
                    />
                    <ProductTitle variant="mobile" />
                  </div>

                  <ProductChips variant="mobile" />
                  <Insurance variant="mobile" />

                  <div className="flex w-full items-center justify-between">
                    <QuantityText quantity={quantity} variant="card" />
                    <CurrentColorLine />
                  </div>

                  <QuantitySelector />
                  <ProductPrice />

                  <div className="w-full sm:w-auto">
                    <AddToCartButton />
                  </div>
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default MobilePurchaseBar;
