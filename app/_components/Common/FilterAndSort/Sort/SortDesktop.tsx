import { SORT_OPTIONS } from "@/app/_utils/constants";
import clsx from "clsx";
import { LucideSliders } from "lucide-react";

interface SortDesktopProps {
  currentSort: string;
  onSortChange: (sort: string) => void;
}

function SortDesktop({ currentSort, onSortChange }: SortDesktopProps) {
  return (
    <div className="hidden gap-6 px-4 lg:flex">
      <div className="flex items-center gap-2">
        <LucideSliders className="size-4.5" />
        <span>مرتب سازی:</span>
      </div>
      <div className="flex items-center gap-4">
        {SORT_OPTIONS.map((option) => (
          <button
            key={option.value}
            className={clsx("select-none", {
              "text-primary": currentSort === option.value,
              "text-default-500 md:hover:text-default-700 transition-colors md:cursor-pointer":
                currentSort !== option.value,
            })}
            disabled={currentSort === option.value}
            onClick={() => onSortChange(option.value)}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SortDesktop;
