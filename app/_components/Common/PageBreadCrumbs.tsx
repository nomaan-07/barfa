"use client";

import { ProductBrand, ProductCategory } from "@/app/_utils/types";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";
import Link from "next/link";

interface PageBreadCrumbsProps {
  category: ProductCategory;
  brand: ProductBrand[];
}

function PageBreadCrumbs({ category, brand }: PageBreadCrumbsProps) {
  return (
    <Breadcrumbs>
      <BreadcrumbItem>
        <Link href="/">فروشگاه اینترنتی برفا</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        {category ? <Link href="all">همه‌ی محصولات</Link> : "همه‌ی محصولات"}
      </BreadcrumbItem>
      {category && <BreadcrumbItem>{category.fa}</BreadcrumbItem>}
      {brand.length === 1 && <BreadcrumbItem>{brand[0].fa}</BreadcrumbItem>}
    </Breadcrumbs>
  );
}

export default PageBreadCrumbs;
