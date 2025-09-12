import DoubleInputWrapper from "@/app/_components/Common/FormInputs/DoubleInputWrapper";
import InputSkeleton from "@/app/_components/Common/FormInputs/InputSkeleton";
import { Card, CardBody } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";
import AccountSectionHeaderSkeleton from "./AccountSectionHeaderSkeleton";

function AccountFormSkeleton() {
  return (
    <Card>
      <AccountSectionHeaderSkeleton />
      <CardBody>
        <div className="space-y-6">
          <DoubleInputWrapper>
            <InputSkeleton width={28} />
            <InputSkeleton width={68} />
          </DoubleInputWrapper>
          <DoubleInputWrapper>
            <InputSkeleton width={72} />
            <InputSkeleton width={36} />
          </DoubleInputWrapper>
          <DoubleInputWrapper>
            <InputSkeleton width={76} />
            <InputSkeleton width={76} />
          </DoubleInputWrapper>
          <Skeleton className="h-10 w-full rounded-xl sm:mx-auto sm:w-48" />
        </div>
      </CardBody>
    </Card>
  );
}

export default AccountFormSkeleton;
