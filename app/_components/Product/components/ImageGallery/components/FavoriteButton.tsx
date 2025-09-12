"use client";

import { updateUser } from "@/app/_lib/actions";
import { useProductStore } from "@/app/_store/productStore";
import { useUserStore } from "@/app/_store/userStore";
import { FavoriteProducts } from "@/app/_utils/types";
import { addToast } from "@heroui/toast";
import { Tooltip } from "@heroui/tooltip";
import clsx from "clsx";
import { LucideHeart } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useShallow } from "zustand/shallow";

function FavoriteButton() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const isInitialized = useUserStore((state) => state.isInitialized);
  const favoriteProducts = useUserStore((state) => state.favorites);
  const setInitialUser = useUserStore((state) => state.setInitialUser);

  const product = useProductStore(
    useShallow((state) => ({
      id: state.id,
      title: state.title_fa,
      imageSrc: state.image_sources.main,
    })),
  );

  const isFavorite = favoriteProducts.some((p) => p.id === product.id);

  const tooltipContent = isFavorite
    ? "حذف از مورد علاقه ها"
    : "افزودن به مورد علاقه‌ها";

  async function handleToggleFavorite() {
    if (!isInitialized) return router.push(`/login?backTo=${pathname}`);

    let favorites: FavoriteProducts;

    if (isFavorite) {
      favorites = favoriteProducts.filter((p) => p.id !== product.id);
    } else {
      favorites = [...favoriteProducts, product];
    }

    setIsLoading(true);

    const { error, updatedUser } = await updateUser({ favorites });

    setIsLoading(false);

    if (error) {
      addToast({
        title: isFavorite
          ? "خطا در حذف از مورد علاقه‌ها"
          : "خطا در اضافه کردن به مورد علاقه‌ها",
        variant: "bordered",
        color: "danger",
      });
    } else if (updatedUser) {
      addToast({
        title: isFavorite
          ? "از مورد علاقه‌ها حذف شد"
          : "به مورد علاقه‌ها اضافه شد",
        description: product.title,
        variant: "bordered",
        color: isFavorite ? "warning" : "success",
      });

      setInitialUser(updatedUser);
    }
  }

  return (
    <Tooltip
      content={tooltipContent}
      placement="right"
      color={isFavorite ? "foreground" : "danger"}
    >
      <button
        className={clsx(
          "transition-colors md:cursor-pointer",
          isFavorite
            ? "text-danger md:hover:text-danger-400"
            : "text-foreground md:hover:text-danger",
        )}
        aria-label={tooltipContent}
        onClick={handleToggleFavorite}
        disabled={isLoading}
      >
        {isFavorite ? (
          <LucideHeart fill="currentColor" size={24} />
        ) : (
          <LucideHeart size={24} />
        )}
      </button>
    </Tooltip>
  );
}

export default FavoriteButton;
