import { Tooltip } from "@heroui/tooltip";
import { LucideHeart } from "lucide-react";

function FavoriteButton() {
  return (
    <Tooltip content="افزودن به مورد علاقه‌ها" placement="right" color="danger">
      <button
        className="md:hover:text-danger transition-colors md:cursor-pointer"
        aria-label="افزودن به مورد علاقه‌ها"
      >
        <LucideHeart size={24} />
      </button>
    </Tooltip>
  );
}

export default FavoriteButton;
