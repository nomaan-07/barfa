import { notFound } from "next/navigation";
import {
  SORT_OPTIONS,
  VALID_CATEGORIES,
  VALID_SEARCHPARAMS,
} from "./constants";

export const convertToEnglish = (value: string) => {
  const persianToEnglishMap: Record<string, string> = {
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
  return value.replace(/[۰-۹]/g, (char) => persianToEnglishMap[char] || char);
};

export const convertToPersian = (value: number | string, formatting = true) => {
  const num = typeof value === "number" ? value : convertToEnglish(value);

  if (formatting) return Number(num).toLocaleString("fa-IR");

  const numStr = String(num);

  const englishToPersianMap: Record<string, string> = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  };
  return numStr.replace(/[0-9]/g, (char) => englishToPersianMap[char] || char);
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
  searchParams: Record<string, string | string[] | undefined>,
) => {
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

export const getCategoryBySlug = (slug: string) => {
  const category = VALID_CATEGORIES.find((c) => c.en === slug);

  if (!category) return notFound();

  return category;
};

export const calculateFinalPrice = (
  discountedPrice: number,
  selectedQuantity: number,
  hasInsurance: boolean,
  insurancePrice: number,
) => {
  const basePrice = discountedPrice * selectedQuantity;

  return hasInsurance ? basePrice + insurancePrice : basePrice;
};

export const calculateOriginalPrice = (price: number, quantity: number) =>
  price * quantity;
