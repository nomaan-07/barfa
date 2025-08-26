import { useQueryFilters } from "@/app/_hooks/useQueryFilters";
import { useFilterStore } from "@/app/_store/filterStore";
import { convertToEnglish, convertToPersian } from "@/app/_utils/helper";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Slider } from "@heroui/slider";
import { useState } from "react";

function PriceFilter() {
  const dbMin = useFilterStore((state) => state.minPrice);
  const dbMax = useFilterStore((state) => state.maxPrice);

  const { updateParams, getParam } = useQueryFilters();

  const minParam = Number(getParam("minPrice")) || dbMin;
  const maxParam = Number(getParam("maxPrice")) || dbMax;

  const [value, setValue] = useState<[number, number]>([
    Math.max(0, minParam),
    Math.min(dbMax, maxParam),
  ]);

  const minValue = convertToPersian(value[0]);
  const maxValue = convertToPersian(value[1]);

  function handleMinInput(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = Number(
      convertToEnglish(e.target.value).replace(/[^0-9]/g, ""),
    );

    if (!isNaN(newValue)) {
      // clamp min between 0 and current max
      setValue([Math.min(Math.max(newValue, 0), value[1]), value[1]]);
    }
  }

  function handleMaxInput(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = Number(
      convertToEnglish(e.target.value).replace(/[^0-9]/g, ""),
    );

    if (!isNaN(newValue)) {
      // clamp max between current min and dbMax
      setValue([value[0], Math.max(Math.min(newValue, dbMax), value[0])]);
    }
  }

  function handleApplyFilter() {
    updateParams({ minPrice: value[0], maxPrice: value[1] });
  }

  return (
    <div className="space-y-4" style={{ direction: "ltr" }}>
      <div className="space-y-2">
        <Input
          type="text"
          value={minValue}
          onChange={handleMinInput}
          aria-label="حداقل قیمت"
        />
        <Input
          type="text"
          value={maxValue}
          onChange={handleMaxInput}
          aria-label="حداکثر قیمت"
        />
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

        {/* Slider limited to dbMin/dbMax */}
        <Slider
          size="sm"
          value={value}
          minValue={dbMin}
          maxValue={dbMax}
          onChange={(val) => setValue(val as [number, number])}
          aria-label="فیلتر قیمت"
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
        isDisabled={value[0] === minParam && value[1] === maxParam}
      >
        اعمال فیلتر
      </Button>
    </div>
  );
}

export default PriceFilter;
