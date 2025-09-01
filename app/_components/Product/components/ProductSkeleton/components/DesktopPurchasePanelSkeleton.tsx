import InsuranceSkeleton from "@/app/_components/Common/Skeletons/InsuranceSkeleton";
import ProductBadgesSkeleton from "@/app/_components/Common/Skeletons/ProductBadgesSkeleton";
import ProductQuantityAndPriceSkeleton from "@/app/_components/Common/Skeletons/ProductQuantityAndPriceSkeleton";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

function DesktopPurchasePanelSkeleton() {
  return (
    <Card className="hidden lg:block">
      <CardHeader>
        <ProductBadgesSkeleton size="lg" />
      </CardHeader>

      <CardBody className="space-y-6">
        <InsuranceSkeleton />
        <ProductQuantityAndPriceSkeleton />
      </CardBody>

      <CardFooter className="justify-end">
        {/* Add to cart button */}
        <Skeleton className="h-10 w-1/2 rounded-xl" />
      </CardFooter>
    </Card>
  );
}

export default DesktopPurchasePanelSkeleton;
