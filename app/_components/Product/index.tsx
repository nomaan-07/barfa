"use client";

import { useProductsStore } from "@/app/_store/productStore";
import { ProductType } from "@/app/_utils/types";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { useEffect } from "react";
import PageBreadCrumbs from "../Common/PageBreadCrumbs";
import ImageGallery from "./components/ImageGallery";
import MainFeatures from "./components/MainFeatures";
import ProductChips from "./components/ProductChips";
import ProductTabs from "./components/ProductTabs";
import ProductTitle from "./components/ProductTitle";
import PurchasePanel from "./components/PurchasePanel";
import Insurance from "./components/PurchasePanel/components/Insurance";

interface ProductProps {
  product: ProductType;
}

function Product({ product }: ProductProps) {
  const { category, brand } = product;

  const setInitialProduct = useProductsStore(
    (state) => state.setInitialProduct,
  );

  useEffect(() => {
    setInitialProduct(product);
  }, [product, setInitialProduct]);

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
          </Card>
        </section>

        <section className="space-y-6 lg:col-span-6">
          {/* Mobile Options */}
          <ProductChips variant="mobile" />
          <Insurance variant="mobile" />

          <PurchasePanel />
          <MainFeatures />

          <ProductTabs />
        </section>
      </main>
      {/* Mobile sticky buy bar */}
      {/* <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/90 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">قیمت</span>
            <span className="text-lg font-extrabold text-gray-900">
              {convertToPersian(product.discounted_price)}{" "}
              <span className="text-xs text-gray-500">تومان</span>
            </span>
          </div>
          <Button radius="lg" className="bg-primary px-6 text-white">
            افزودن
          </Button>
        </div>
      </div> */}
    </div>
  );
}

export default Product;
