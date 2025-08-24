import { useProductsStore } from "@/app/_store/productStore";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Card, CardBody } from "@heroui/card";
import { Tab, Tabs } from "@heroui/tabs";

function ProductTabs() {
  const introduction = useProductsStore((state) => state.introduction);
  const specifications = useProductsStore((state) => state.specifications);
  return (
    <Card>
      <CardBody className="px-0">
        <Tabs
          aria-label="جزئیات محصول"
          variant={introduction ? "solid" : "light"}
          className="px-4"
        >
          {introduction && (
            <Tab key="intro" title="معرفی">
              <div className="p-4 leading-8 text-gray-700">{introduction}</div>
            </Tab>
          )}
          <Tab key="specs" title="مشخصات فنی">
            <div className="p-2">
              <Accordion
                variant="splitted"
                selectionMode="multiple"
                defaultExpandedKeys={["عمومی"]}
                className="w-full"
              >
                {Object.entries(specifications).map(([group, content]) => (
                  <AccordionItem
                    key={group}
                    aria-label={group}
                    title={<span className="font-semibold">{group}</span>}
                  >
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {Array.isArray(content)
                        ? content.map((v, i) => (
                            <SpecRow key={i} label={`•`} value={String(v)} />
                          ))
                        : Object.entries(content || {}).map(([k, v]) => (
                            <SpecRow key={k} label={k} value={String(v)} />
                          ))}
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-gray-100 p-3">
      <span className="text-xs text-gray-500">{label}</span>
      <span className="text-sm font-medium text-gray-800 ltr:ml-auto rtl:mr-auto">
        {value}
      </span>
    </div>
  );
}

export default ProductTabs;
