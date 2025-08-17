import {
  SWIPER_PRODUCTS_LIMIT,
  TABLES,
  TABLE_FIELDS,
} from "@/app/_utils/constants";
import {
  Color,
  ListProduct,
  ProductBrand,
  ProductsVariation,
} from "@/app/_utils/types";
import { supabase } from "../supabase";

// -------- GET --------

interface getProductsOptions {
  category: string;
  variation: ProductsVariation;
  discounted?: string;
  sort?: string;
  available?: string;
  minPrice?: string;
  maxPrice?: string;
  brands?: string[];
  colors?: string[];
}

export async function getProducts({
  variation,
  category,
  discounted,
  sort,
  available,
  minPrice,
  maxPrice,
  brands,
  colors,
}: getProductsOptions) {
  const isSwiper = variation === "swiper";

  let query = supabase.from(TABLES.PRODUCTS).select(TABLE_FIELDS.LIST_PRODUCT);

  if (category !== "all") {
    query = query.eq("category->>en", category);
  }

  // Filter
  if (discounted) query = query.gt("discount_percent", 0).gt("quantity", 0);
  if (available) query = query.gt("quantity", 0);
  if (brands?.length) query = query.in("brand->>en", brands);
  if (minPrice !== undefined)
    query = query.gte("discounted_price", Number(minPrice)).gt("quantity", 0);
  if (maxPrice !== undefined)
    query = query.lte("discounted_price", Number(maxPrice)).gt("quantity", 0);

  // Sort
  switch (sort) {
    case "newest":
      query = query.order("created_at", { ascending: false });
      break;
    case "oldest":
      query = query.order("created_at", { ascending: true });
      break;
    case "cheapest":
      query = query
        .order("discounted_price", { ascending: true })
        .gt("quantity", 0);
      break;
    case "expensive":
      query = query
        .order("discounted_price", { ascending: false })
        .gt("quantity", 0);
      break;
    default:
      query = query.order("quantity", { ascending: false });
      break;
  }

  if (isSwiper) query = query.gt("quantity", 0).limit(SWIPER_PRODUCTS_LIMIT);

  const { data, error } = await query;

  // For testing
  await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    throw new Error(`${category} products could not be loaded`);
  }

  // Color Filtering
  let products = data as unknown as ListProduct[];

  if (colors?.length) {
    products = products.filter((product) => {
      const productColorsEn = product.colors.map((c) => c.en);
      return colors.some((c) => productColorsEn.includes(c));
    });
  }

  return products;
}

export async function getProductsBrands({ category }: { category: string }) {
  let query = supabase.from(TABLES.PRODUCTS).select("brand");

  if (category !== "all") {
    query = query.eq("category->>en", category);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("brands could not be loaded");
  }

  // Extract unique brands
  const brandMap = new Map<string, ProductBrand>();
  data.forEach((item) => {
    const b = item.brand;
    if (b?.en && !brandMap.has(b.en)) {
      brandMap.set(b.en, b);
    }
  });

  return Array.from(brandMap.values());
}

export async function getProductsColors({ category }: { category: string }) {
  let query = supabase.from(TABLES.PRODUCTS).select("colors");

  if (category !== "all") {
    query = query.eq("category->>en", category);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("colors could not be loaded");
  }

  // Extract unique brands
  const colorMap = new Map<string, Color>();

  data
    .flatMap((row) => row.colors)
    .forEach((color) => {
      if (color?.en && !colorMap.has(color.en)) {
        colorMap.set(color.en, color);
      }
    });

  return Array.from(colorMap.values());
}

export async function getMinAndMaxPrice({ category }: { category: string }) {
  let query = supabase.from(TABLES.PRODUCTS).select("discounted_price");

  if (category !== "all") {
    query = query.eq("category->>en", category);
  }

  const { data, error } = await query.gt("quantity", 0);

  if (error) {
    console.error(error);
    throw new Error("prices could not be loaded");
  }

  const prices = data.map((row) => row.discounted_price);

  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return { min, max };
}
