import BreadCrumbsSkeleton from "@/app/_components/Common/Skeletons/BreadCrumbsSkeleton";
import { Card, CardBody, CardFooter } from "@heroui/card";
import DesktopPurchasePanelSkeleton from "./components/DesktopPurchasePanelSkeleton";
import ImageGallerySkeleton from "./components/ImageGallerySkeleton";
import MainFeaturesSkeleton from "./components/MainFeaturesSkeleton";
import MobilePurchaseBarSkeleton from "./components/MobilePurchaseBarSkeleton";
import ProductTabsSkeleton from "./components/ProductTabsSkeleton";
import ProductTitleSkeleton from "./components/ProductTitleSkeleton";

function ProductSkeleton() {
  return (
    <div className="mx-auto mt-4 max-w-7xl space-y-6 px-6">
      <BreadCrumbsSkeleton />
      <ProductTitleSkeleton variant="desktop" />

      <div className="grid grid-cols-1 gap-6 pb-24 lg:grid-cols-12">
        {/* Gallery */}
        <section className="lg:col-span-6">
          <Card>
            <CardBody className="p-4 text-right">
              <ImageGallerySkeleton />
            </CardBody>
            <CardFooter className="block">
              <ProductTitleSkeleton variant="mobile" />
            </CardFooter>
          </Card>
        </section>

        <section className="space-y-6 lg:col-span-6">
          <DesktopPurchasePanelSkeleton />
          <MainFeaturesSkeleton />
          <ProductTabsSkeleton />
        </section>

        <MobilePurchaseBarSkeleton />
      </div>
    </div>
  );
}

export default ProductSkeleton;
