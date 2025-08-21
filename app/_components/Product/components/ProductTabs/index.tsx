import { ProductSpecs } from "@/app/_utils/types";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Card, CardBody } from "@heroui/card";
import { Tab, Tabs } from "@heroui/tabs";

interface ProductTabsProps {
  introduction?: string;
  specs: ProductSpecs;
}

function ProductTabs({ introduction, specs }: ProductTabsProps) {
  return (
    <Card>
      <CardBody className="p-0">
        <Tabs aria-label="جزئیات محصول" variant="underlined" className="px-4">
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
              >
                {Object.entries(specs).map(([group, content]) => (
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
          <Tab key="reviews" title="نظرات">
            <div className="p-4 text-gray-600">
              هنوز نظری برای این کالا ثبت نشده است.
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
