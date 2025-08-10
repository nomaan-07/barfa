import { ListProduct } from "./types";

export const convertToPersian = (number: number) => {
  return number.toLocaleString("fa-IR");
};

interface sortProductsOptions {
  products: ListProduct[];
  field: "newest";
}

export const sortProducts = ({ products, field }: sortProductsOptions) => {
  const sortedProducts = [...products];

  if (field === "newest") {
    sortedProducts.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );
  }

  return sortedProducts;
};
