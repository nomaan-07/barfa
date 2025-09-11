"use client";

import { addToast } from "@heroui/toast";
import { Tooltip } from "@heroui/tooltip";
import { LucideShare2 } from "lucide-react";
import { usePathname } from "next/navigation";

function ShareButton() {
  const pathname = usePathname();
  const url = `${window.location.origin}${pathname}`;

  async function handleShare() {
    if (!url) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url,
        });
      } catch {
        // Share failed - Ignored intentionally
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        addToast({
          title: "لینک محصول کپی شد",
          variant: "bordered",
          color: "success",
        });
      } catch {
        addToast({
          title: "کپی لینک با خطا مواجه شد",
          variant: "bordered",
          color: "danger",
        });
      }
    }
  }

  return (
    <Tooltip content="به اشتراک گذاشتن محصول" placement="right" color="primary">
      <button
        onClick={handleShare}
        className="md:hover:text-primary transition-colors md:cursor-pointer"
        aria-label="به اشتراک گذاشتن محصول"
      >
        <LucideShare2 size={24} />
      </button>
    </Tooltip>
  );
}

export default ShareButton;
