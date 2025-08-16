import { Badge } from "@heroui/badge";
import { Button } from "@heroui/button";
import { LucideFilter, LucideSliders } from "lucide-react";
import { ReactNode } from "react";

interface DrawerOpenButtonProps {
  onOpen: () => void;
  variation: "filter" | "sort";
  children: ReactNode;
  hasAnyFilter?: boolean;
}

function DrawerOpenButton({
  onOpen,
  variation,
  children,
  hasAnyFilter,
}: DrawerOpenButtonProps) {
  const Icon = variation === "sort" ? LucideSliders : LucideFilter;

  return (
    <Badge
      color="primary"
      content=""
      placement="top-left"
      isInvisible={!hasAnyFilter}
      shape="circle"
    >
      <Button
        onPress={onOpen}
        variant={hasAnyFilter ? "flat" : "light"}
        color={hasAnyFilter ? "primary" : "default"}
        className="shadow-small"
        startContent={<Icon className="size-4.5" />}
      >
        <span>{children}</span>
      </Button>
    </Badge>
  );
}

export default DrawerOpenButton;
