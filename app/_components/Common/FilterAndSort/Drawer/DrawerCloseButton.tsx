import { Button } from "@heroui/button";
import { LucideX } from "lucide-react";

interface DrawerCloseButtonProps {
  onClose: () => void;
}

function DrawerCloseButton({ onClose }: DrawerCloseButtonProps) {
  return (
    <Button variant="light" isIconOnly onPress={onClose}>
      <LucideX className="size-5" />
    </Button>
  );
}

export default DrawerCloseButton;
