import { Card, CardBody, CardHeader, Skeleton } from "@heroui/react";
import DoubleInputWrapper from "../../Common/FormInputs/DoubleInputWrapper";
import InputSkeleton from "../../Common/FormInputs/InputSkeleton";

function CheckoutFormSkeleton() {
  return (
    <Card>
      <CardHeader className="h-12 sm:h-13">
        <Skeleton className="h-6 w-9 rounded-full sm:w-10" />
      </CardHeader>
      <CardBody>
        <div className="space-y-6">
          <DoubleInputWrapper>
            <InputSkeleton width={36} />
            <InputSkeleton width={36} />
          </DoubleInputWrapper>
          <DoubleInputWrapper>
            <InputSkeleton width={28} />
            <InputSkeleton width={76} />
          </DoubleInputWrapper>
          <DoubleInputWrapper>
            <InputSkeleton width={76} />
            <InputSkeleton width={36} />
          </DoubleInputWrapper>
          <InputSkeleton width={76} />
          <DoubleInputWrapper>
            <InputSkeleton width={48} />
            <InputSkeleton width={32} />
          </DoubleInputWrapper>
          <Skeleton className="h-10 w-full rounded-xl sm:mx-auto sm:w-48" />
        </div>
      </CardBody>
    </Card>
  );
}

export default CheckoutFormSkeleton;
