import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

function DesktopPurchasePanelSkeleton() {
  return (
    <Card className="hidden lg:sticky lg:top-4 lg:z-30 lg:block">
      <CardHeader>
        {/* Chips */}
        <div className="flex w-full justify-between">
          <Skeleton className="h-8 w-33 rounded-full" />
          <Skeleton className="h-8 w-50 rounded-full" />
        </div>
      </CardHeader>

      <CardBody className="space-y-6">
        {/* Insurance */}
        <Skeleton className="h-13 w-full rounded-xl" />

        <div className="flex items-center justify-between">
          {/* <QuantitySelector /> */}
          <Skeleton className="h-17 w-42 rounded-xl" />

          {/* <Price /> */}
          <div>
            <div className="mb-2 flex gap-4">
              <Skeleton className="h-5 w-19 rounded-full" />
              <Skeleton className="h-5 w-8 rounded-full" />
            </div>
            <Skeleton className="h-5 w-31 rounded-full" />
          </div>
        </div>
      </CardBody>

      <CardFooter className="justify-end">
        {/* Add to cart button */}
        <Skeleton className="h-10 w-1/2 rounded-xl" />
      </CardFooter>
    </Card>
  );
}

export default DesktopPurchasePanelSkeleton;
