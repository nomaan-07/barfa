import { useProductStore } from "@/app/_store/productStore";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { useState } from "react";
import Specification from "./Specification";
import ToggleButton from "./ToggleButton";

function ProductSpecifications() {
  const [isOpen, setIsOpen] = useState(false);
  const specifications = useProductStore((state) => state.specifications);

  const onToggle = () => setIsOpen((prev) => !prev);

  const specificationsArr = isOpen
    ? Object.entries(specifications)
    : Object.entries(specifications).slice(0, 3);

  return (
    <div className="space-y-6">
      <Accordion
        variant="splitted"
        selectionMode="multiple"
        defaultExpandedKeys={["عمومی"]}
        className="w-full"
      >
        {specificationsArr.map(([group, content]) => (
          <AccordionItem
            key={group}
            aria-label={group}
            title={
              <span className="text-sm font-semibold sm:text-base">
                {group}
              </span>
            }
          >
            <div className="w-full space-y-2">
              {Array.isArray(content)
                ? content.map((v, i) => (
                    <Specification key={i} label="•" value={v} />
                  ))
                : Object.entries(content).map(([k, v]) => (
                    <Specification key={k} label={k} value={v} />
                  ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>

      {Object.entries(specifications).length > 3 && (
        <ToggleButton
          openText="مشاهده همه مشخصات"
          isOpen={isOpen}
          onToggle={onToggle}
        />
      )}
    </div>
  );
}

export default ProductSpecifications;
