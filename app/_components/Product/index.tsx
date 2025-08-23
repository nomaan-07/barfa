"use client";

import { ProductType } from "@/app/_utils/types";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Input } from "@heroui/input";
import { Tooltip } from "@heroui/tooltip";
import { useMemo, useState } from "react";
import PageBreadCrumbs from "../Common/PageBreadCrumbs";
import ImageGallery from "./components/ImageGallery";
import ProductTabs from "./components/ProductTabs";
import ProductTitle from "./components/ProductTitle";
import PurchasePanel from "./components/PurchasePanel";
import FinishedPanel from "./components/FinishedPanel";

// ---- Helpers ----------------------------------------------------------------
function parseJSONSafe(str: string, fallback: object) {
  try {
    // Fix a possible accidental escape before commas like "LED," cases
    const cleaned = String(str).replace(/\\,(?=\s|\"|$)/g, ",");
    return JSON.parse(cleaned);
  } catch (e) {
    console.log(e);
    return fallback;
  }
}

function formatIRR(n: number | null) {
  if (n == null) return "-";
  const num = Number(String(n).replace(/[^\d.-]/g, ""));
  return num.toLocaleString("fa-IR");
}

// ---- Main Component ----------------------------------------------------------

interface ProductProps {
  raw: Record<string, string>;
  product2: ProductType;
}

function Product({ raw, product2 }: ProductProps) {
  const product = raw;

  const mainFeatures = useMemo(
    () => parseJSONSafe(product.main_features, {}),
    [product.main_features],
  );

  const price = Number(product.price);
  const discountPercent = Number(product.discount_percent || 0);
  const hasDiscount = discountPercent > 0;
  const discountedPrice = hasDiscount
    ? Math.floor(price - (price * discountPercent) / 100)
    : Number(product.discounted_price || price);

  // Derived blocks
  const featuresList = Object.entries(mainFeatures || {});

  return (
    <div className="mx-auto mt-4 max-w-7xl space-y-6 px-6">
      <PageBreadCrumbs
        page="product"
        category={product2.category}
        brand={product2.brand}
      />

      <ProductTitle
        enTitle={product2.title_en}
        faTitle={product2.title_fa}
        variant="desktop"
      />

      <main className="grid grid-cols-1 gap-6 pb-24 lg:grid-cols-12">
        {/* Gallery */}
        <section className="space-y-6 lg:col-span-6">
          <Card>
            <CardBody className="p-4 text-right">
              <ImageGallery
                imageSources={product2.image_sources}
                colors={product2.colors}
              />
            </CardBody>
            <CardFooter>
              <ProductTitle
                enTitle={product2.title_en}
                faTitle={product2.title_fa}
                variant="mobile"
              />
            </CardFooter>
          </Card>
        </section>

        <section className="space-y-6 lg:col-span-6">
          {product2.quantity > 0 ? (
            <PurchasePanel product={product2} />
          ) : (
            <FinishedPanel />
          )}

          {/* Quick features */}
          {featuresList?.length > 0 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {featuresList.map(([k, v]) => (
                <Card key={k}>
                  <div className="p-3">
                    <div className="text-xs text-gray-500">{k}</div>
                    <div className="mt-1 text-sm font-semibold text-gray-800">
                      {String(v)}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Mobile Options */}
          <Card className="lg:hidden">insurance - warranty</Card>

          <ProductTabs
            introduction={product2.introduction}
            specs={product2.specifications}
          />
        </section>
      </main>
      {/* Mobile sticky buy bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/90 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">قیمت</span>
            <span className="text-lg font-extrabold text-gray-900">
              {formatIRR(discountedPrice)}{" "}
              <span className="text-xs text-gray-500">تومان</span>
            </span>
          </div>
          <Button radius="lg" className="bg-primary px-6 text-white">
            افزودن
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
