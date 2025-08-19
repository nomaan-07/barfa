import { useDisclosure } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ChangeEvent,
  createContext,
  KeyboardEvent,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type VoidFn = () => void;

type SearchPanelContextType = {
  isOpen: boolean;
  onOpen: VoidFn;
  onOpenChange: VoidFn;
  onClose: VoidFn;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: VoidFn;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  onClear: VoidFn;
};

const SearchPanelContext = createContext<SearchPanelContextType | undefined>(
  undefined,
);

export function SearchPanelProvider({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [value, setValue] = useState(query);
  const router = useRouter();

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }

  const onSearch = useCallback(() => {
    const q = value.trim();

    if (q) {
      router.push(`/search?query=${encodeURIComponent(q)}`);
      onClose();
    }
  }, [onClose, router, value]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") onSearch();
    },
    [onSearch],
  );

  const onClear = () => setValue("");

  const contextValue = useMemo(
    () => ({
      isOpen,
      onOpen,
      onOpenChange,
      onClose,
      value,
      onChange,
      onSearch,
      onKeyDown,
      onClear,
    }),
    [isOpen, onOpen, onOpenChange, onClose, onSearch, onKeyDown, value],
  );

  return (
    <SearchPanelContext.Provider value={contextValue}>
      {children}
    </SearchPanelContext.Provider>
  );
}

export function useSearchPanel() {
  const context = useContext(SearchPanelContext);

  if (!context) {
    throw new Error("useSearchPanel must be used within a SearchPanelProvider");
  }

  return context;
}
