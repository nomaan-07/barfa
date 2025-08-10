"use client";

import { Card } from "@heroui/card";
import { useScrollDirection } from "../../_hooks/useScrollDirection";

function CategorySidebar() {
  const scrollDirection = useScrollDirection();

  return (
    <Card
      className="sticky top-20 hidden h-fit w-64 shrink-0 transition-transform duration-500 lg:block"
      shadow="sm"
      style={{
        transform:
          scrollDirection === "down" ? "translateY(-64px)" : "translateY(0)",
      }}
    >
      <div className="h-20">test</div>
    </Card>
  );
}

export default CategorySidebar;
