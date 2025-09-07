import { Address } from "@/app/_utils/types";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/react";

interface CheckoutAddressSummaryProps {
  address: Address | null;
  onOpenForm: () => void;
}

function CheckoutAddressSummary({
  address,
  onOpenForm,
}: CheckoutAddressSummaryProps) {
  if (!address) return null;

  const { postalCode, buildingNumber, address: fullAddress } = address;

  return (
    <Card>
      <CardBody className="flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <div className="text-right">
          <h2 className="font-black sm:text-lg">آدرس</h2>
          <div className="flex flex-wrap gap-1 text-xs sm:text-sm">
            <span>{fullAddress}،</span>
            <span> پلاک {buildingNumber}،</span>
            <span> کد پستی: {postalCode}</span>
          </div>
        </div>
        <Button
          color="primary"
          className="w-full sm:w-fit"
          onPress={onOpenForm}
        >
          ویرایش
        </Button>
      </CardBody>
    </Card>
  );
}

export default CheckoutAddressSummary;
