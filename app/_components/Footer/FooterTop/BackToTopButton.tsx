"use client";

import { Button } from "@heroui/button";
import { LucideChevronUp } from "lucide-react";

function BackToTopButton() {
  return (
    <Button
      className="hover:text-foreground border-1 text-white sm:text-base"
      variant="ghost"
      onPress={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      endContent={<LucideChevronUp className="size-5" />}
    >
      برگشت به بالا
    </Button>
  );
}

export default BackToTopButton;
