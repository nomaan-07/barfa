import { useQueryFilters } from "@/app/_components/_hooks/useQueryFilters";
import { useProducts } from "@/app/_contexts/ProductsContext";
import { convertToEnglish, convertToPersian } from "@/app/_utils/helper";
import { Input } from "@heroui/input";
import { Slider } from "@heroui/slider";
import { useEffect, useState } from "react";

function useDebouncedValue<T>(val: T, delay = 500) {
  const [debouncedVal, setDebouncedVal] = useState(val);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedVal(val), delay);
    return () => clearTimeout(timer);
  }, [val, delay]);

  return debouncedVal;
}

function PriceFilter() {
  const { minPrice, maxPrice } = useProducts();
  const { updateParams } = useQueryFilters();
  const [value, setValue] = useState<[number, number]>([minPrice, maxPrice]);
  const minValue = convertToPersian(value[0]);
  const maxValue = convertToPersian(value[1]);

  function handleMinInput(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    const newValue = convertToEnglish(inputValue).replace(/[^0-9]/g, "");
    const numberedValue = Number(newValue);

    if (!isNaN(numberedValue) && numberedValue <= value[1]) {
      setValue([numberedValue, value[1]]);
    }
  }

  function handleMaxInput(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    const newValue = convertToEnglish(inputValue).replace(/[^0-9]/g, "");
    const numberedValue = Number(newValue);

    if (!isNaN(numberedValue) && numberedValue <= 999_999_999) {
      setValue([value[0], numberedValue]);
    }
  }

  const debouncedValue = useDebouncedValue(value, 800);

  useEffect(() => {
    updateParams({ minPrice: debouncedValue[0], maxPrice: debouncedValue[1] });
  }, [debouncedValue, updateParams]);

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
    </div>
  );
}

export default PriceFilter;
