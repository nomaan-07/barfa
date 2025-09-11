import { Tooltip } from "@heroui/react";
import { LucideShare2 } from "lucide-react";

function ShareButton() {
  return (
    <Tooltip content="به اشتراک گذاشتن کالا" placement="right" color="primary">
      <button
        className="md:hover:text-primary transition-colors md:cursor-pointer"
        aria-label="به اشتراک گذاشتن کالا"
      >
        <LucideShare2 size={24} />
      </button>
    </Tooltip>
  );
}

export default ShareButton;
