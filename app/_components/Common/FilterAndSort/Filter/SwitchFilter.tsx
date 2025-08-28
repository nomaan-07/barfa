import { useQueryFilters } from "@/app/_hooks/useQueryFilters";
import { Divider } from "@heroui/divider";
import { Switch } from "@heroui/switch";
import clsx from "clsx";

interface SwitchFilterProps {
  title: string;
  param: "available" | "discounted";
}

function SwitchFilter({ title, param }: SwitchFilterProps) {
  const { hasParam, updateParams } = useQueryFilters();
  const isActive =
    param === "discounted"
      ? hasParam("discounted")
      : hasParam("discounted") || hasParam("available");

  const isDisabled = param === "available" && hasParam("discounted");

  const toggle = () => updateParams({ [param]: isActive ? null : "1" });

  return (
    <div className="mx-2">
      <div className="flex h-14 items-center justify-between">
        <h2 className={clsx(isDisabled && "text-default-400")}>{title}</h2>
        <Switch
          size="sm"
          isSelected={isActive}
          isDisabled={isDisabled}
          onValueChange={toggle}
        ></Switch>
      </div>
      <Divider />
    </div>
  );
}

export default SwitchFilter;
