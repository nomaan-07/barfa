import { useProductsStore } from "@/app/_store/productStore";
import { Card, CardBody } from "@heroui/card";
import { Tab, Tabs } from "@heroui/tabs";
import ProductIntroduction from "./components/ProductIntroduction";
import ProductSpecifications from "./components/ProductSpecifications";

function ProductTabs() {
  const introduction = useProductsStore((state) => state.introduction);

  return (
    <Card>
      <CardBody className="overflow-hidden px-0 text-right">
        <Tabs
          aria-label="جزئیات محصول"
          variant={introduction ? "solid" : "light"}
          className="px-4"
        >
          {introduction && (
            <Tab key="intro" title="معرفی">
              <ProductIntroduction />
            </Tab>
          )}
          <Tab key="specs" title="مشخصات فنی">
            <ProductSpecifications />
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}

export default ProductTabs;
