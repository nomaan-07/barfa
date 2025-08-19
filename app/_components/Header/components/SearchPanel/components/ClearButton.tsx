import { useSearchPanel } from "@/app/_contexts/SearchPanelContext";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { LucideEraser } from "lucide-react";

function ClearButton() {
  const { onClear } = useSearchPanel();

  return (
    <Tooltip content="پاک کردن">
      <Button variant="light" isIconOnly onPress={onClear}>
        <LucideEraser className="size-5" />
      </Button>
    </Tooltip>
  );
}

export default ClearButton;
