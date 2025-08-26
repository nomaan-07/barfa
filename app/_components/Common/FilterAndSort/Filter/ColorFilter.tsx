import { useQueryFilters } from "@/app/_hooks/useQueryFilters";
import { useFilterStore } from "@/app/_store/filterStore";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";

function ColorFilter() {
  const { updateParams, getAllParams } = useQueryFilters();

  const colors = useFilterStore((state) => state.colors);

  const selectedColors = getAllParams("color");

  return (
    <CheckboxGroup
      value={selectedColors}
      onChange={(values) => updateParams({ color: values }, { multiple: true })}
    >
      {colors.map((color) => (
        <Checkbox
          classNames={{
            base: "max-w-full",
            label: "flex w-full justify-start items-center",
          }}
          key={color.en}
          value={color.en}
        >
          <span className="shrink-0">{color.fa}</span>
          <span className="flex h-full w-full justify-end">
            <span
              className="size-5 rounded-lg"
              style={{ backgroundColor: color.value }}
            ></span>
          </span>
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
}

export default ColorFilter;
