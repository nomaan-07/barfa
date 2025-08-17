"use client";

import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";
import Link from "next/link";

function PageBreadCrumbs() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem>
        <Link href="/">فروشگاه اینترنتی برفا</Link>
      </BreadcrumbItem>
      <BreadcrumbItem href="/test">همه‌ی محصولات</BreadcrumbItem>
      <BreadcrumbItem href="/test">شیائومی</BreadcrumbItem>
    </Breadcrumbs>
  );
}

export default PageBreadCrumbs;
