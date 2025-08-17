import { useFilters } from "@/app/_contexts/FiltersContext";
import { useQueryFilters } from "@/app/_hooks/useQueryFilters";
import { convertToEnglish, convertToPersian } from "@/app/_utils/helper";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Slider } from "@heroui/slider";
import { useState } from "react";

function PriceFilter() {
  const { minPrice, maxPrice } = useFilters();
  const { updateParams } = useQueryFilters();
  const [value, setValue] = useState<[number, number]>([minPrice, maxPrice]);

  const minValue = convertToPersian(value[0]);
  const maxValue = convertToPersian(value[1]);

  function handleMinInput(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = convertToEnglish(e.target.value).replace(/[^0-9]/g, "");
    const numberedValue = Number(newValue);

    if (!isNaN(numberedValue) && numberedValue <= value[1]) {
      setValue([numberedValue, value[1]]);
    }
  }

  function handleMaxInput(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = convertToEnglish(e.target.value).replace(/[^0-9]/g, "");
    const numberedValue = Number(newValue);

    if (!isNaN(numberedValue) && numberedValue <= 999_999_999) {
      setValue([value[0], numberedValue]);
    }
  }

  function handleApplyFilter() {
    updateParams({ minPrice: value[0], maxPrice: value[1] });
  }

  return (
    <div className="space-y-4" style={{ direction: "ltr" }}>
      <div className="space-y-2">
        <Input type="text" value={minValue} onChange={handleMinInput} />
        <Input type="text" value={maxValue} onChange={handleMaxInput} />
      </div>
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-xs">تومان</span>
            <span className="text-sm">{minValue}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs">تومان</span>
            <span className="text-sm">{maxValue}</span>
          </div>
        </div>
        <Slider
          defaultValue={[minPrice, maxPrice]}
          size="sm"
          value={value}
          minValue={Number(minPrice)}
          maxValue={Number(maxPrice)}
          onChange={(val) => setValue(val as [number, number])}
        />
        <div className="flex items-center justify-between text-sm">
          <span>کمترین</span>
          <span>بیشترین</span>
        </div>
      </div>
      <Button
        color="primary"
        fullWidth
        onPress={handleApplyFilter}
        isDisabled={value[0] === minPrice && value[1] === maxPrice}
      >
        اعمال فیلتر
      </Button>
    </div>
  );
}

export default PriceFilter;
