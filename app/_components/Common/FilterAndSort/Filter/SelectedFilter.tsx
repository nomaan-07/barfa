import { useQueryFilters } from "@/app/_hooks/useQueryFilters";
import { Chip } from "@heroui/chip";
import { ReactNode } from "react";

interface SelectedFilterProps {
  param: string | string[];
  value?: string | null;
  children: ReactNode;
  multiple?: boolean;
}
function SelectedFilter({
  param,
  value = null,
  multiple,
  children,
}: SelectedFilterProps) {
  const { updateParams } = useQueryFilters();

  function handleClose() {
    if (Array.isArray(param)) {
      const updates = param.reduce(
        (acc, key) => {
          acc[key] = value;
          return acc;
        },
        {} as Record<string, string | null>,
      );

      updateParams(updates, { multiple });
    } else {
      updateParams({ [param]: value }, { multiple });
    }
  }

  return (
    <Chip color="primary" onClose={handleClose} size="sm">
      {children}
    </Chip>
  );
}

export default SelectedFilter;
