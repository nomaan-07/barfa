import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import clsx from "clsx";
import { LucideArrowRight, LucideX } from "lucide-react";

type DrawerCloseButtonBaseProps = {
  onClose: () => void;
  icon?: "x" | "arrow";
};
type DrawerCloseButtonProps =
  | (DrawerCloseButtonBaseProps & {
      isAbsolute: true;
      position: "left" | "right";
    })
  | (DrawerCloseButtonBaseProps & {
      isAbsolute?: false;
      position?: never;
    });

function DrawerCloseButton({
  onClose,
  icon = "x",
  isAbsolute,
  position,
}: DrawerCloseButtonProps) {
  return (
    <Tooltip content="بستن">
      <div
        className={clsx(isAbsolute && "absolute top-2 z-10", {
          "left-2": position === "left",
          "right-2": position === "right",
        })}
      >
        <Button variant="light" isIconOnly onPress={onClose} aria-label="بستن">
          {icon === "arrow" && <LucideArrowRight className="size-5" />}
          {icon === "x" && <LucideX className="size-5" />}
        </Button>
      </div>
    </Tooltip>
  );
}

export default DrawerCloseButton;
