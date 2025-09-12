"use client";

import { useQueryFilters } from "@/app/_hooks/useQueryFilters";
import { useScrollDirection } from "@/app/_hooks/useScrollDirection";
import { useFilterStore } from "@/app/_store/filterStore";
import { Colors, ProductBrand } from "@/app/_utils/types";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Tooltip } from "@heroui/tooltip";
import { LucideX } from "lucide-react";
import { useEffect } from "react";
import FilterPanel from "./FilterPanel";

interface FilterSidebarProps {
  brands: ProductBrand[];
  colors: Colors;
  prices: {
    min: number;
    max: number;
  };
}

function FilterSidebar({ brands, colors, prices }: FilterSidebarProps) {
  const scrollDirection = useScrollDirection();
  const { clearAll, hasAnyFilter } = useQueryFilters();

  const setInitialFilters = useFilterStore((state) => state.setInitialFilters);

  useEffect(() => {
    setInitialFilters({
      brands,
      colors,
      minPrice: prices.min,
      maxPrice: prices.max,
    });
  }, [brands, colors, prices.min, prices.max, setInitialFilters]);

  return (
    <Card
      className="sticky top-20 hidden h-fit w-64 shrink-0 transition-transform duration-500 lg:block"
      shadow="sm"
      style={{
        transform:
          scrollDirection === "down" ? "translateY(-64px)" : "translateY(0)",
      }}
    >
      <div className="mx-2 flex h-16 items-center justify-between border-b py-4">
        <h2 className="text-lg font-semibold">فیلتر‌ها</h2>
        {hasAnyFilter() && (
          <Tooltip content="حذف همه‌ی فیلترها">
            <Button
              isIconOnly
              variant="light"
              size="sm"
              color="danger"
              onPress={() => clearAll()}
              aria-label="حذف همه‌ی فیلترها"
            >
              <LucideX className="size-5" />
            </Button>
          </Tooltip>
        )}
      </div>
      <FilterPanel />
    </Card>
  );
}

export default FilterSidebar;
