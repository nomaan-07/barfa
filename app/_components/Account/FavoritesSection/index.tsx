"use client";

import { useUserStore } from "@/app/_store/userStore";
import { Card, CardBody } from "@heroui/card";
import { LucideHeart } from "lucide-react";
import AccountEmptyProducts from "../components/common/AccountEmptyProducts";
import AccountSectionHeader from "../components/common/AccountSectionHeader";
import FavoriteProductList from "./components/FavoriteProductList";

function FavoritesSection() {
  const products = useUserStore((state) => state.favorites);
  const isInitialized = useUserStore((state) => state.isInitialized);

  const sectionHeader = (
    <AccountSectionHeader>لیست علاقه‌مندی‌ها</AccountSectionHeader>
  );

  // TODO: Favorites Skeleton
  if (!isInitialized) return <p>...</p>;

  if (!products.length)
    return (
      <AccountEmptyProducts
        title="لیست علاقه‌مندی‌های شما خالی است"
        Icon={LucideHeart}
        header={sectionHeader}
      />
    );

  return (
    <Card>
      {sectionHeader}
      <CardBody>
        <FavoriteProductList products={products} />
      </CardBody>
    </Card>
  );
}

export default FavoritesSection;
