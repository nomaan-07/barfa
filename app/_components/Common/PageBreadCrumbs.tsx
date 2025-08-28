"use client";

import { ProductBrand, ProductCategory } from "@/app/_utils/types";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";
import Link from "next/link";

interface PageBreadCrumbsProps {
  category: ProductCategory;
  brand: ProductBrand[] | ProductBrand;
  page: "category" | "product";
}

function PageBreadCrumbs({ category, brand, page }: PageBreadCrumbsProps) {
  const isProductPage = page === "product";

  const brandArr = Array.isArray(brand) ? brand : [brand];

  return (
    <div className="overflow-hidden">
      <div className="scrollbar-hide w-full overflow-x-auto">
        <Breadcrumbs className="*:flex-nowrap">
          <BreadcrumbItem>
            <Link href="/">فروشگاه اینترنتی برفا</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            {category ? (
              <Link href="/category/all">همه‌ی محصولات</Link>
            ) : (
              "همه‌ی محصولات"
            )}
          </BreadcrumbItem>

          {isProductPage && (
            <BreadcrumbItem>
              <Link href={`/category/${category.en}`}>{category.fa}</Link>
            </BreadcrumbItem>
          )}

          {!isProductPage &&
            category &&
            category.en !== "all" &&
            (brandArr.length === 1 ? (
              <BreadcrumbItem>
                <Link href={category.en}>{category.fa}</Link>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem>{category.fa}</BreadcrumbItem>
            ))}

          {brandArr.length === 1 && (
            <BreadcrumbItem isCurrent={!isProductPage}>
              {isProductPage ? (
                <Link href={`/category/${category.en}?brand=${brandArr[0].en}`}>
                  {brandArr[0].fa}
                </Link>
              ) : (
                brandArr[0].fa
              )}
            </BreadcrumbItem>
          )}
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default PageBreadCrumbs;
