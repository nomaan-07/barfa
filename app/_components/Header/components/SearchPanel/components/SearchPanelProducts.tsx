import NoProductsFound from "@/app/_components/Common/ProductsList/components/NoProductsFound";
import { useSearchPanel } from "@/app/_contexts/SearchPanelContext";
import { fetchSearchedProducts } from "@/app/_lib/actions";
import { SearchPanelProductsType } from "@/app/_utils/types";
import { Spinner } from "@heroui/spinner";
import { useEffect, useState } from "react";
import SearchPanelProduct from "./SearchPanelProduct";

function SearchPanelProducts() {
  const [results, setResults] = useState<SearchPanelProductsType>([]);
  const { value, onSearch } = useSearchPanel();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!value.trim()) {
      setResults([]);
      return;
    }

    const debounce = setTimeout(async () => {
      setLoading(true);
      try {
        const products = await fetchSearchedProducts(value);
        setResults(products);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [value]);

  return (
    value && (
      <section className="border-default-200 mx-auto w-full rounded-xl border p-4">
        <header className="border-b-default-200 mb-4 flex items-center justify-between border-b pb-4">
          <div className="flex gap-2 text-sm">
            <span>جستجو:</span>
            <p className="text-primary w-29 truncate sm:w-108">{value}</p>
          </div>

          <button
            className="md:hover:text-primary text-xs transition-colors select-none md:cursor-pointer"
            aria-label="نمایش همه"
            onClick={onSearch}
          >
            نمایش همه
          </button>
        </header>

        <div className="h-90 overflow-y-auto px-2 py-4">
          {loading && (
            <div className="flex items-center justify-center">
              <Spinner />
            </div>
          )}
          {!loading && results.length === 0 && (
            <NoProductsFound size="small" variant="search-panel" />
          )}

          {!loading && results.length > 0 && (
            <div className="space-y-3">
              {results.map((product) => (
                <SearchPanelProduct key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    )
  );
}

export default SearchPanelProducts;
