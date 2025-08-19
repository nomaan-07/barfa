import { useSearchPanel } from "@/app/_contexts/SearchPanelContext";
import { Input } from "@heroui/input";
import { LucideSearch } from "lucide-react";
import ClearButton from "./ClearButton";

function SearchInput() {
  const { value, onChange, onKeyDown } = useSearchPanel();
  return (
    <Input
      placeholder="محصول مورد نظر خود را جستجو کنید."
      autoFocus
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      classNames={{
        inputWrapper: [
          "px-0",
          "focus-within:ring-1",
          "focus-within:ring-default",
        ],
      }}
      startContent={
        <div className="flex size-10 shrink-0 items-center justify-center">
          <LucideSearch className="text-default-400 size-5" />
        </div>
      }
      endContent={value && <ClearButton />}
    />
  );
}

export default SearchInput;
