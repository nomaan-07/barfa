import { Card, CardBody, CardHeader } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";
import DoubleInputWrapper from "../../Common/FormInputs/DoubleInputWrapper";
import InputSkeleton from "../../Common/FormInputs/InputSkeleton";

function CheckoutSkeleton() {
  return (
    <>
      <div className="w-full space-y-4">
        {/* Header */}
        <Card>
          <CardHeader className="mb-1 justify-between">
            <Skeleton className="h-6 w-20 rounded-full sm:w-22" />
            <Skeleton className="h-4 w-7 rounded-full" />
          </CardHeader>
          <CardBody>
            {/* Products */}
            <div className="flex flex-wrap items-center gap-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="shadow-small h-23 space-y-1 rounded-md p-1"
                >
                  <Skeleton className="size-16 rounded-md" />
                  <Skeleton className="mx-auto h-3 w-8 rounded-full" />
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Form */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-9 rounded-full sm:w-10" />
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
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
      </div>

      {/* Summary Card*/}
      <div className="lg:shadow-medium border-t-default-200 fixed inset-x-0 bottom-0 z-30 flex h-45 w-full shrink-0 flex-col justify-between space-y-4 border-t bg-white p-4 sm:h-22 sm:flex-row sm:items-center sm:space-y-0 lg:static lg:h-45 lg:w-80 lg:flex-col lg:items-start lg:space-y-4 lg:rounded-2xl">
        <div className="border-b-default-200 flex h-11 w-full items-center justify-between border-b pb-4 sm:h-12 sm:w-auto sm:flex-col sm:border-b-0 sm:pb-0 lg:h-11 lg:w-full lg:flex-row lg:border-b lg:pb-4">
          <Skeleton className="h-4 w-35 rounded-full" />
          <Skeleton className="h-4 w-22 rounded-full sm:h-5 sm:w-31" />
        </div>

        <div className="flex h-7 w-full items-center justify-between sm:h-12 sm:w-auto sm:flex-col lg:h-7 lg:w-full lg:flex-row">
          <Skeleton className="h-4 w-24 rounded-full" />
          <Skeleton className="h-4 w-28 rounded-full sm:h-5 sm:w-31" />
        </div>

        {/* Button */}
        <Skeleton className="h-10 w-full rounded-xl sm:w-38 lg:w-full" />
      </div>
    </>
  );
}

export default CheckoutSkeleton;
