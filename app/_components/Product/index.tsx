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

  const [qty, setQty] = useState(1);

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

          <ProductTabs
            introduction={product2.introduction}
            specs={product2.specifications}
          />
        </section>

        {/* Purchase panel */}
        <aside className="space-y-6 lg:col-span-6">
          <Card className="lg:sticky lg:top-4 lg:z-30">
            <CardHeader className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Chip
                  variant="flat"
                  className="text-primary border-primary/20 border"
                >
                  {parseJSONSafe(product.brand, {}).fa || "برند"}
                </Chip>
                <Divider orientation="vertical" className="h-5" />
                <span className="text-sm text-gray-500">
                  کد کالا: #{product2.id}
                </span>
              </div>
              <Tooltip content={product.warranty} placement="bottom">
                <Chip variant="flat">{product.warranty}</Chip>
              </Tooltip>
            </CardHeader>
            <Divider />
            <CardBody className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="text-xs text-gray-500">قیمت</div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold tracking-tight text-gray-900">
                    {formatIRR(discountedPrice)}
                    <span className="mr-1 text-sm font-medium text-gray-500">
                      تومان
                    </span>
                  </span>
                  {hasDiscount && (
                    <span className="text-sm text-gray-400 line-through">
                      {formatIRR(price)}
                    </span>
                  )}
                </div>
                {hasDiscount && (
                  <Chip
                    color="danger"
                    variant="flat"
                    size="sm"
                    className="w-max"
                  >
                    {discountPercent}% تخفیف
                  </Chip>
                )}
              </div>
              <div className="space-y-2">
                <div className="text-xs text-gray-500">تعداد</div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="flat"
                    onPress={() => setQty((q) => Math.max(1, q - 1))}
                  >
                    −
                  </Button>
                  <Input
                    value={String(qty)}
                    onChange={(e) => {
                      const val = Number(e.target.value.replace(/[^\d]/g, ""));
                      setQty(val > 0 ? val : 1);
                    }}
                    className="w-20 text-center"
                  />
                  <Button
                    size="sm"
                    variant="flat"
                    onPress={() => setQty((q) => q + 1)}
                  >
                    +
                  </Button>
                </div>
                <div className="text-xs text-gray-500">
                  موجودی:{" "}
                  <span className="font-semibold text-gray-700">
                    {product.quantity}
                  </span>{" "}
                  عدد
                </div>
              </div>
            </CardBody>
            <CardFooter className="flex flex-col gap-3 md:flex-row">
              <Button radius="lg" className="bg-primary flex-1 text-white">
                افزودن به سبد خرید
              </Button>
              <Button
                radius="lg"
                variant="bordered"
                className="border-primary text-primary flex-1"
              >
                خرید فوری
              </Button>
            </CardFooter>
          </Card>

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
        </aside>
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
