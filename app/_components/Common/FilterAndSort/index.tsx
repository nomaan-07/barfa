import { Card } from "@heroui/card";
import Filter from "./Filter";
import Sort from "./Sort";

function FilterAndSort() {
  return (
    <>
      <Card
        shadow="sm"
        className="shadow-small h-10 flex-row items-center justify-between text-sm lg:justify-start"
      >
        <Filter />
        <Sort />
      </Card>
    </>
  );
}

export default FilterAndSort;
