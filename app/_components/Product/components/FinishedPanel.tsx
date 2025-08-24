import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { LucideBell } from "lucide-react";

function FinishedPanel() {
  return (
    <Card className="bg-danger-50 fixed right-0 bottom-0 left-0 z-30 mb-0 rounded-none lg:sticky lg:top-4 lg:mb-6 lg:block lg:rounded-xl">
      <CardBody>
        <div className="flex flex-wrap items-center justify-center gap-2 text-right sm:justify-between">
          <span className="text-danger font-bold sm:text-lg">
            موجودی این کالا به پایان رسیده است.
          </span>
          <Button
            color="warning"
            startContent={<LucideBell className="size-5" />}
            className="w-full sm:w-auto"
          >
            موجود شد، خبرم کن!
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default FinishedPanel;
