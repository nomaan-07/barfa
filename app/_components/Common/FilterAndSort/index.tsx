import FilterDrawer from "./Filter/FilterDrawer";
import Sort from "./Sort";

function FilterAndSort() {
  return (
    <>
      <div className="lg:shadow-small flex h-10 items-center justify-between rounded-xl text-sm shadow-none lg:justify-start">
        <FilterDrawer />
        <Sort />
      </div>
    </>
  );
}

export default FilterAndSort;
