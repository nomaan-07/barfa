import { useQueryFilters } from "@/app/_hooks/useQueryFilters";
import { useFilterStore } from "@/app/_store/filterStore";
import { convertToPersian } from "@/app/_utils/helper";
import { Accordion, AccordionItem } from "@heroui/accordion";
import BrandFIlter from "./BrandFilter";
import ColorFilter from "./ColorFilter";
import FilterActiveLine from "./FilterActiveLine";
import PriceFilter from "./PriceFilter";
import SwitchFilter from "./SwitchFilter";

function mapSelectedToPersian(
  selected: string[],
  items: { en: string; fa: string; value?: string }[],
) {
  return selected
    .map((param) => items.find((item) => item.en === param)?.fa)
    .join("، ");
}

function FilterPanel() {
  const { getParam, getAllParams } = useQueryFilters();

  const brands = useFilterStore((state) => state.brands);
  const colors = useFilterStore((state) => state.colors);

  const minPrice = getParam("minPrice");
  const maxPrice = getParam("maxPrice");
  const brandParams = getAllParams("brand");
  const colorParams = getAllParams("color");

  const isBrandsParamExist = brandParams.length > 0;
  const isColorParamExist = colorParams.length > 0;

  return (
    <div>
      {/* Available Products */}
      <SwitchFilter param="available" title="فقط کالاهای موجود" />
      {/* Discounted Products */}
      <SwitchFilter param="discounted" title="فقط کالاهای تخفیف دار" />
      <Accordion selectionMode="multiple">
        {/* Price */}
        <AccordionItem
          title="قیمت"
          startContent={minPrice && maxPrice && <FilterActiveLine />}
          subtitle={
            minPrice &&
            maxPrice && (
              <p>
                از {convertToPersian(minPrice)} تا {convertToPersian(maxPrice)}
              </p>
            )
          }
        >
          <PriceFilter />
        </AccordionItem>

        {/* Brand */}
        <AccordionItem
          title="برند"
          startContent={isBrandsParamExist && <FilterActiveLine />}
          subtitle={
            isBrandsParamExist && (
              <p>{mapSelectedToPersian(brandParams, brands)}</p>
            )
          }
        >
          <BrandFIlter />
        </AccordionItem>

        {/* Colors */}
        <AccordionItem
          title="رنگ"
          startContent={isColorParamExist && <FilterActiveLine />}
          subtitle={
            isColorParamExist && (
              <p>{mapSelectedToPersian(colorParams, colors)}</p>
            )
          }
        >
          <ColorFilter />
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FilterPanel;
