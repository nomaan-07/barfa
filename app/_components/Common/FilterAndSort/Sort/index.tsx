"use client";

import { SortChangeHandler } from "@/app/_utils/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SortDesktop from "./SortDesktop";
import SortDrawer from "./SortDrawer";

function Sort() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentSort = searchParams.get("sort") || "default";

  const sortChange: SortChangeHandler = (sort, onClose) => {
    onClose?.();

    const params = new URLSearchParams(searchParams);

    if (sort === "default") {
      params.delete("sort");
    } else {
      params.set("sort", sort);
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    router.push(newUrl);
  };

  return (
    <>
      <SortDesktop currentSort={currentSort} onSortChange={sortChange} />
      <SortDrawer currentSort={currentSort} onSortChange={sortChange} />
    </>
  );
}

export default Sort;
