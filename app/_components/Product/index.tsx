"use client";

import { useProductsStore } from "@/app/_store/productStore";
import { ProductType } from "@/app/_utils/types";
import { Card, CardBody, CardFooter } from "@heroui/card";
import PageBreadCrumbs from "../Common/PageBreadCrumbs";
import DesktopPurchasePanel from "./components/DesktopPurchasePanel";
import ImageGallery from "./components/ImageGallery";
import MainFeatures from "./components/MainFeatures";
import MobileProductSpecialOffer from "./components/MobileProductSpecialOffer";
import MobilePurchaseBar from "./components/MobilePurchaseBar";
import ProductTabs from "./components/ProductTabs";
import ProductTitle from "./components/ProductTitle";

interface ProductProps {
  product: ProductType;
}

function Product({ product }: ProductProps) {
  const { category, brand } = product;

  const setInitialProduct = useProductsStore(
    (state) => state.setInitialProduct,
  );

  setInitialProduct(product);

  return (
    <div className="mx-auto mt-4 max-w-7xl space-y-6 px-6">
      <PageBreadCrumbs page="product" category={category} brand={brand} />
      <ProductTitle variant="desktop" />

      <main className="grid grid-cols-1 gap-6 pb-24 lg:grid-cols-12">
        {/* Gallery */}
        <section className="lg:col-span-6">
          <Card>
            <CardBody className="p-4 text-right">
              <ImageGallery />
            </CardBody>
            <CardFooter className="block">
              <ProductTitle variant="mobile" />
            </CardFooter>
            <MobileProductSpecialOffer />
          </Card>
        </section>

        <section className="space-y-6 lg:col-span-6">
          <DesktopPurchasePanel />
          <MainFeatures />
          <ProductTabs />
        </section>
      </main>

      <MobilePurchaseBar />
    </div>
  );
}

export default Product;
