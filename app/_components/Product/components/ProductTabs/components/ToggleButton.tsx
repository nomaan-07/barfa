import { Button } from "@heroui/button";
import { LucideChevronDown, LucideChevronUp } from "lucide-react";

interface ToggleButtonProps {
  onToggle: () => void;
  isOpen: boolean;
  openText: string;
}

function ToggleButton({ isOpen, onToggle, openText }: ToggleButtonProps) {
  const Icon = isOpen ? LucideChevronUp : LucideChevronDown;
  return (
    <Button
      color={isOpen ? "danger" : "success"}
      variant="flat"
      size="sm"
      onPress={onToggle}
      className="mr-4"
      endContent={<Icon className="size-5" />}
    >
      {isOpen ? "بستن" : openText}
    </Button>
  );
}

export default ToggleButton;
