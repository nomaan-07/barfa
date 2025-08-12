import { notFound } from "next/navigation";
import {
  SORT_OPTIONS,
  VALID_CATEGORY_SLUGS,
  VALID_SEARCHPARAMS,
} from "./constants";

export const convertToPersian = (number: number) => {
  return number.toLocaleString("fa-IR");
};

function invalidSearchParams(params: Record<string, string | undefined>) {
  const keys = Object.keys(params);
  const invalidKeys = keys.filter((key) => !VALID_SEARCHPARAMS.includes(key));

  if (invalidKeys.length > 0) notFound();
}

export const categoryParamsValidation = (
  slug: string,
  searchParams: Record<string, string | undefined>,
) => {
  if (!VALID_CATEGORY_SLUGS.includes(slug)) notFound();

  invalidSearchParams(searchParams);

  const { sort, discounted } = searchParams;

  if (
    "sort" in searchParams &&
    !SORT_OPTIONS.some((option) => option.value === sort)
  ) {
    notFound();
  }

  if ("discounted" in searchParams && discounted !== "1") notFound();
};
