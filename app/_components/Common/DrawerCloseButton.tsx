import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { LucideArrowRight, LucideX } from "lucide-react";

interface DrawerCloseButtonProps {
  onClose: () => void;
  icon?: "x" | "arrow";
}

function DrawerCloseButton({ onClose, icon = "x" }: DrawerCloseButtonProps) {
  return (
    <Tooltip content="بستن">
      <Button variant="light" isIconOnly onPress={onClose}>
        {icon === "arrow" && <LucideArrowRight className="size-5" />}
        {icon === "x" && <LucideX className="size-5" />}
      </Button>
    </Tooltip>
  );
}

export default DrawerCloseButton;
