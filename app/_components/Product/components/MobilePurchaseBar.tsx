import {
  selectorCurrentImage,
  useProductsStore,
} from "@/app/_store/productStore";
import { Button } from "@heroui/button";
import { Drawer, DrawerBody, DrawerContent } from "@heroui/drawer";
import { Image, useDisclosure } from "@heroui/react";
import clsx from "clsx";
import { LucideChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import DrawerCloseButton from "../../Common/DrawerCloseButton";
import QuantityText from "../../Common/QuantityText";
import AddToCartButton from "./AddToCartButton";
import CurrentColorLine from "./CurrentColorLine";
import ProductInsurance from "./ProductInsurance";
import PurchasePanelBadges from "./PurchasePanelBadges";
import PurchasePanelProductPrice from "./PurchasePanelProductPrice";
import PurchasePanelQuantitySelector from "./PurchasePanelQuantitySelector";

function MobilePurchaseBar() {
  const [isHidden, setIsHidden] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const quantity = useProductsStore((state) => state.quantity);
  const titleFa = useProductsStore((state) => state.title_fa);
  const currentImage = useProductsStore(selectorCurrentImage);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 60;
      setIsHidden(isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "border-t-default-200 fixed inset-x-0 bottom-0 z-40 space-y-3 border-t bg-white p-3 transition-all lg:hidden",
        {
          "pointer-events-none translate-y-6 opacity-0": isHidden,
          "translate-y-0 opacity-100": !isHidden,
        },
      )}
    >
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

                  <div className="flex w-full gap-2">
                    <Image
                      src={currentImage?.url}
                      alt={currentImage?.fa}
                      className="max-h-32"
                    />
                    <div className="flex w-full flex-col justify-between gap-3 py-3">
                      <p className="line-clamp-2 text-sm font-bold sm:text-lg sm:leading-7 md:text-xl md:leading-8">
                        {titleFa}
                      </p>
                      <CurrentColorLine />
                    </div>
                  </div>

                  <PurchasePanelBadges size="sm" />
                  <ProductInsurance />
                  <QuantityText quantity={quantity} variant="normal" />
                  <PurchasePanelQuantitySelector />
                  <PurchasePanelProductPrice />
                  <AddToCartButton className="w-full sm:w-auto" />
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
