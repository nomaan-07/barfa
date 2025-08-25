import { useProductsStore } from "@/app/_store/productStore";
import { Card } from "@heroui/card";

function MainFeatures() {
  const features = useProductsStore((state) => state.main_features);

  if (!features) return null;

  const featuresArr = Object.entries(features);

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      {featuresArr.slice(0, 4).map(([key, value]) => (
        <Card key={key}>
          <div className="p-2 sm:p-3">
            <div className="text-default-500 mb-2 h-4 truncate text-xs sm:mb-3">
              {key}
            </div>
            <div className="h-5 truncate text-xs font-medium sm:text-sm">
              {String(value)}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default MainFeatures;
