"use client";

import { useQueryFilters } from "@/app/_hooks/useQueryFilters";
import { useFilterStore } from "@/app/_store/filterStore";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";

function BrandFilter() {
  const { updateParams, getAllParams } = useQueryFilters();

  const brands = useFilterStore((state) => state.brands);

  const selectedBrands = getAllParams("brand");

  return (
    <CheckboxGroup
      value={selectedBrands}
      onChange={(values) => updateParams({ brand: values }, { multiple: true })}
    >
      {brands.map((brand) => (
        <Checkbox
          key={brand.en}
          value={brand.en}
          classNames={{
            base: "max-w-full",
            label: "flex w-full justify-start items-center",
          }}
        >
          <span className="shrink-0">{brand.fa}</span>
          <span className="text-default-500 flex h-full w-full justify-end text-sm">
            {brand.en}
          </span>
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
}

export default BrandFilter;
