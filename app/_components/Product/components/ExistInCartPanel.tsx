import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { LucideShoppingCart } from "lucide-react";
import Link from "next/link";

function ExistInCartPanel() {
  return (
    <Card className="bg-primary-50 fixed right-0 bottom-0 left-0 z-30 mb-0 rounded-none lg:sticky lg:top-4 lg:mb-6 lg:block lg:rounded-xl">
      <CardBody>
        <div className="flex flex-wrap items-center justify-center gap-2 text-right sm:justify-between">
          <span className="text-primary font-bold sm:text-lg">
            محصول در سبد خرید موجود است.
          </span>
          <Button
            color="primary"
            startContent={<LucideShoppingCart className="size-5" />}
            className="w-full sm:w-auto"
            as={Link}
            href="/cart"
          >
            مشاهده سبد خرید
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default ExistInCartPanel;
