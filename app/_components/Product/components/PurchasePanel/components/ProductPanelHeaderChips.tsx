import { Chip } from "@heroui/chip";
import { LucideGift, LucideShieldCheck } from "lucide-react";

interface ProductPanelHeaderChipsProps {
  hasDiscount: boolean;
  warranty: string;
}

function ProductPanelHeaderChips({
  hasDiscount,
  warranty,
}: ProductPanelHeaderChipsProps) {
  return (
    <div className="flex w-full flex-wrap justify-between gap-2">
      {hasDiscount && (
        <Chip
          color="danger"
          variant="flat"
          size="lg"
          startContent={<LucideGift />}
        >
          <span>پیشنهاد ویژه</span>
        </Chip>
      )}

      <Chip
        color="success"
        variant="flat"
        size="lg"
        startContent={<LucideShieldCheck />}
      >
        {warranty}
      </Chip>
    </div>
  );
}

export default ProductPanelHeaderChips;
