import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { LucideX } from "lucide-react";

interface DrawerCloseButtonProps {
  onClose: () => void;
}

function DrawerCloseButton({ onClose }: DrawerCloseButtonProps) {
  return (
    <Tooltip content="بستن">
      <Button variant="light" isIconOnly onPress={onClose}>
        <LucideX className="size-5" />
      </Button>
    </Tooltip>
  );
}

export default DrawerCloseButton;
