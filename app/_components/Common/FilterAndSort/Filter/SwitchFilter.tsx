import { useQueryFilters } from "@/app/_components/_hooks/useQueryFilters";
import { Divider } from "@heroui/divider";
import { Switch } from "@heroui/switch";

interface SwitchFilterProps {
  title: string;
  param: string;
}

function SwitchFilter({ title, param }: SwitchFilterProps) {
  const { hasParam, updateParams } = useQueryFilters();
  const isActive = hasParam(param);

  const toggle = () => updateParams({ [param]: isActive ? null : "1" });

  return (
    <div className="mx-2">
      <div className="flex h-14 items-center justify-between">
        <h2>{title}</h2>
        <Switch size="sm" isSelected={isActive} onValueChange={toggle}></Switch>
      </div>
      <Divider />
    </div>
  );
}

export default SwitchFilter;
