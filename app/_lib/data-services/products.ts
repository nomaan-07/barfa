import {
  SEARCH_PANEL_PRODUCTS_LIMIT,
  SWIPER_PRODUCTS_LIMIT,
  TABLES,
  TABLE_FIELDS,
} from "@/app/_utils/constants";
import {
  Color,
  ListProduct,
  ProductBrand,
  ProductCategory,
  ProductsVariation,
  SearchPanelProductsType,
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
  query?: string;
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
  query,
}: getProductsOptions) {
  let supabaseQuery = supabase
    .from(TABLES.PRODUCTS)
    .select(TABLE_FIELDS.LIST_PRODUCT);

  // Search page
  if (query) {
    const keywords = query.split(" ").filter(Boolean);

    if (keywords.length === 0) return [];

    const filters: string[] = [];

    keywords.forEach((word) => {
      filters.push(
        `category->>en.ilike.%${word}%,category->>fa.ilike.%${word}%,brand->>en.ilike.%${word}%,brand->>fa.ilike.%${word}%,title_en.ilike.%${word}%,title_fa.ilike.%${word}%`,
      );
    });

    const orClause = filters.join(",");

    supabaseQuery = supabaseQuery.or(orClause);
  }

  if (category !== "all") {
    supabaseQuery = supabaseQuery.eq("category->>en", category);
  }

  // Filter
  if (discounted)
    supabaseQuery = supabaseQuery.gt("discount_percent", 0).gt("quantity", 0);
  if (available) supabaseQuery = supabaseQuery.gt("quantity", 0);
  if (brands?.length) supabaseQuery = supabaseQuery.in("brand->>en", brands);
  if (minPrice !== undefined)
    supabaseQuery = supabaseQuery
      .gte("discounted_price", Number(minPrice))
      .gt("quantity", 0);
  if (maxPrice !== undefined)
    supabaseQuery = supabaseQuery
      .lte("discounted_price", Number(maxPrice))
      .gt("quantity", 0);

  // Sort
  switch (sort) {
    case "newest":
      supabaseQuery = supabaseQuery.order("created_at", { ascending: false });
      break;
    case "oldest":
      supabaseQuery = supabaseQuery.order("created_at", { ascending: true });
      break;
    case "cheapest":
      supabaseQuery = supabaseQuery
        .order("discounted_price", { ascending: true })
        .gt("quantity", 0);
      break;
    case "expensive":
      supabaseQuery = supabaseQuery
        .order("discounted_price", { ascending: false })
        .gt("quantity", 0);
      break;
    default:
      supabaseQuery = supabaseQuery.order("quantity", { ascending: false });
      break;
  }

  if (variation === "swiper")
    supabaseQuery = supabaseQuery
      .gt("quantity", 0)
      .limit(SWIPER_PRODUCTS_LIMIT);

  const { data, error } = await supabaseQuery;

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

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return products;
}

export async function getSearchPanelProducts(query: string) {
  let supabaseQuery = supabase
    .from(TABLES.PRODUCTS)
    .select(TABLE_FIELDS.SEARCH_PANEL_PRODUCTS);

  const keywords = query.split(" ").filter(Boolean);

  if (keywords.length === 0) return [];

  const filters: string[] = [];

  keywords.forEach((word) => {
    filters.push(
      `category->>en.ilike.%${word}%,category->>fa.ilike.%${word}%,brand->>en.ilike.%${word}%,brand->>fa.ilike.%${word}%,title_en.ilike.%${word}%,title_fa.ilike.%${word}%`,
    );
  });

  const orClause = filters.join(",");

  supabaseQuery = supabaseQuery.or(orClause).limit(SEARCH_PANEL_PRODUCTS_LIMIT);

  const { data, error } = await supabaseQuery;

  if (error) {
    console.error(error);
    throw new Error(`searched products could not be loaded`);
  }

  return data as unknown as SearchPanelProductsType;
}

export async function getProductsFilters({ category }: { category: string }) {
  let query = supabase
    .from(TABLES.PRODUCTS)
    .select("brand, colors, discounted_price, quantity, category");

  if (category !== "all") {
    query = query.eq("category->>en", category);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("products filters could not be loaded");
  }

  // Extract current category

  const currentCategory: ProductCategory =
    category !== "all" && data[0]?.category;

  // Extract unique brands
  const brandMap = new Map<string, ProductBrand>();

  data.forEach((row) => {
    const b = row.brand;
    if (b?.en && !brandMap.has(b.en)) {
      brandMap.set(b.en, b);
    }
  });

  // Extract unique colors
  const colorMap = new Map<string, Color>();

  data
    .flatMap((row) => row.colors)
    .forEach((color) => {
      if (color?.en && !colorMap.has(color.en)) {
        colorMap.set(color.en, color);
      }
    });

  // Extract price range

  const prices = data
    .filter((row) => row.quantity > 0)
    .map((row) => row.discounted_price);

  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return {
    currentCategory,
    productsBrands: Array.from(brandMap.values()),
    productsColors: Array.from(colorMap.values()),
    priceRange: { min, max },
  };
}

export async function getProduct(id: number) {
  const { data, error } = await supabase
    .from(TABLES.PRODUCTS)
    .select("*")
    .eq("id", id)
    .single();

  // For testing
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  if (error) {
    console.error(error);
    throw new Error(`product could not be loaded`);
  }

  return data;
}
