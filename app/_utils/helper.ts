import { notFound } from "next/navigation";
import {
  SORT_OPTIONS,
  VALID_CATEGORY_SLUGS,
  VALID_SEARCHPARAMS,
} from "./constants";

export const convertToPersian = (number: number) => {
  return number.toLocaleString("fa-IR");
};

export const convertToEnglish = (persian: string) => {
  const persianToEnglishMap: { [key: string]: string } = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };
  return persian.replace(/[۰-۹]/g, (char) => persianToEnglishMap[char] || char);
};

function invalidSearchParams(
  params: Record<string, string | string[] | undefined>,
) {
  const keys = Object.keys(params);
  const invalidKeys = keys.filter((key) => !VALID_SEARCHPARAMS.includes(key));

  if (invalidKeys.length > 0) notFound();
}

function isValidArrayParam(param?: string | string[]) {
  if (!param) return false;

  const arr = Array.isArray(param) ? param : [param];

  return arr.some((v) => v.trim() !== "");
}

export const categoryParamsValidation = (
  category: string,
  searchParams: Record<string, string | string[] | undefined>,
) => {
  if (!VALID_CATEGORY_SLUGS.includes(category)) notFound();

  invalidSearchParams(searchParams);

  const { sort, discounted, available, brand, color, minPrice, maxPrice } =
    searchParams;

  if (
    "sort" in searchParams &&
    !SORT_OPTIONS.some((option) => option.value === sort)
  ) {
    notFound();
  }

  if ("discounted" in searchParams && discounted !== "1") notFound();
  if ("available" in searchParams && available !== "1") notFound();
  if ("brand" in searchParams && !isValidArrayParam(brand)) notFound();
  if ("color" in searchParams && !isValidArrayParam(color)) notFound();
  if (
    "minPrice" in searchParams &&
    (minPrice === "" || isNaN(Number(minPrice)))
  )
    notFound();
  if (
    "maxPrice" in searchParams &&
    (maxPrice === "" || isNaN(Number(maxPrice)))
  )
    notFound();
};

export function normalizeParam(param?: string | string[]) {
  if (!param) return;
  return Array.isArray(param) ? param : [param];
}
