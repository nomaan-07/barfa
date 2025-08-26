import DrawerCloseButton from "@/app/_components/Common/DrawerCloseButton";
import { useSearchPanel } from "@/app/_contexts/SearchPanelContext";
import { Input } from "@heroui/input";
import ClearButton from "./ClearButton";

function SearchInput() {
  const { value, onChange, onKeyDown, onClose } = useSearchPanel();
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
      startContent={<DrawerCloseButton onClose={onClose} />}
      endContent={value && <ClearButton />}
    />
  );
}

export default SearchInput;
