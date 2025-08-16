"use client";

import { useQueryFilters } from "@/app/_components/_hooks/useQueryFilters";
import { useScrollDirection } from "@/app/_components/_hooks/useScrollDirection";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Tooltip } from "@heroui/tooltip";
import { LucideX } from "lucide-react";
import FilterPanel from "./FilterPanel";

function FilterSidebar() {
  const scrollDirection = useScrollDirection();

  const { clearAll, hasAnyFilter } = useQueryFilters();

  return (
    <Card
      className="sticky top-20 hidden h-fit w-64 shrink-0 transition-transform duration-500 lg:block"
      shadow="sm"
      style={{
        transform:
          scrollDirection === "down" ? "translateY(-64px)" : "translateY(0)",
      }}
    >
      <div className="mx-2 flex justify-between border-b py-4">
        <h2 className="text-lg font-semibold">فیلتر‌ها</h2>
        {hasAnyFilter() && (
          <Tooltip content="حذف همه‌ی فیلترها">
            <Button
              isIconOnly
              variant="light"
              size="sm"
              color="danger"
              onPress={() => clearAll()}
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
