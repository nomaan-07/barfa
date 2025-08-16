"use client";

import { useQueryFilters } from "@/app/_components/_hooks/useQueryFilters";
import { useProducts } from "@/app/_contexts/ProductsContext";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";

function BrandFilter() {
  const { brands } = useProducts();
  const { updateParams, getAllParams } = useQueryFilters();

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
