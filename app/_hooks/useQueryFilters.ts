"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type UpdateParamsOptions = {
  replace?: boolean;
  multiple?: boolean; // allow multiple values for the same key
};

export function useQueryFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function getParam(key: string): string | null {
    return searchParams.get(key);
  }

  function getAllParams(key: string): string[] {
    return searchParams.getAll(key);
  }

  function hasParam(key: string, value?: string) {
    if (value) {
      return searchParams.getAll(key).includes(value);
    }
    return searchParams.has(key);
  }

  function hasAnyFilter() {
    const ignore = ["sort", "query"];
    return Array.from(searchParams.keys()).some((key) => !ignore.includes(key));
  }

  function updateParams(
    updates: Record<
      string,
      string | number | (string | number)[] | null | undefined
    >,
    options: UpdateParamsOptions = {},
  ) {
    const params = new URLSearchParams(searchParams);

    for (const key in updates) {
      const value = updates[key];

      if (value === null) {
        params.delete(key);
      } else if (Array.isArray(value)) {
        params.delete(key);
        value.forEach((v) => params.append(key, String(v)));
      } else {
        if (options.multiple) {
          params.append(key, String(value));
        } else {
          params.set(key, String(value));
        }
      }
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    if (options.replace) {
      router.replace(newUrl);
    } else {
      router.push(newUrl);
    }
  }

  function clearAll(options: { replace?: boolean } = {}) {
    const params = new URLSearchParams();
    const queryValue = searchParams.get("query");

    if (queryValue) {
      params.set("query", queryValue);
    }

    const newUrl = params.toString()
      ? `${pathname}?${params.toString()}`
      : pathname;

    if (options.replace) {
      router.replace(newUrl);
    } else {
      router.push(newUrl);
    }
  }

  return {
    searchParams,
    getParam,
    getAllParams,
    hasParam,
    hasAnyFilter,
    updateParams,
    clearAll,
  };
}
