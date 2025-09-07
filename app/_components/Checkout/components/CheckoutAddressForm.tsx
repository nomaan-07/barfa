import { useUserStore } from "@/app/_store/userStore";
import { Address } from "@/app/_utils/types";
import { AddressValidation } from "@/app/_utils/validation";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Form } from "@heroui/form";
import { useState } from "react";
import { useShallow } from "zustand/shallow";
import AddressInput from "../../Common/FormInputs/AddressInput";
import BuildingNumberInput from "../../Common/FormInputs/BuildingNumberInput";
import DoubleInputWrapper from "../../Common/FormInputs/DoubleInputWrapper";
import EmailInput from "../../Common/FormInputs/EmailInput";
import FirstNameInput from "../../Common/FormInputs/FirstNameInput";
import LastNameInput from "../../Common/FormInputs/LastNameInput";
import PhoneInput from "../../Common/FormInputs/PhoneInput";
import PostalCodeInput from "../../Common/FormInputs/PostalCodeInput";

export interface CheckoutAddressFormProps {
  setAddress: (address: Address) => void;
  address: Address | null;
}
export function CheckoutAddressForm({
  setAddress,
  address,
}: CheckoutAddressFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { firstName, lastName, email, phone } = useUserStore(
    useShallow((state) => ({
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      phone: state.phone,
    })),
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const dataObj = Object.fromEntries(formData);

    const firstName = dataObj.firstName as string;
    const lastName = dataObj.lastName as string;
    const email = dataObj.email as string;
    const phone = dataObj.phone as string;
    const address = dataObj.address as string;
    const buildingNumber = dataObj.buildingNumber as string;
    const postalCode = dataObj["postal-code"] as string;

    const addressObj = {
      firstName,
      lastName,
      email,
      phone,
      address,
      postalCode,
      buildingNumber,
    };
    const validationErrors = AddressValidation(addressObj);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setErrors({});

    setAddress(addressObj);
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <h2 className="font-black sm:text-lg">آدرس</h2>
      </CardHeader>
      <CardBody>
        <Form
          className="space-y-4 text-right"
          onSubmit={handleSubmit}
          validationErrors={errors}
        >
          <DoubleInputWrapper>
            <FirstNameInput defaultValue={firstName || address?.firstName} />
            <LastNameInput defaultValue={lastName || address?.lastName} />
          </DoubleInputWrapper>
          <DoubleInputWrapper>
            <PhoneInput defaultValue={phone || address?.phone} />
            <EmailInput defaultValue={email || address?.email} />
          </DoubleInputWrapper>
          <AddressInput defaultValue={address?.address} />
          <DoubleInputWrapper>
            <PostalCodeInput defaultValue={address?.postalCode} />
            <BuildingNumberInput defaultValue={address?.buildingNumber} />
          </DoubleInputWrapper>
          <Button
            className="w-full sm:mx-auto sm:w-48"
            color="primary"
            type="submit"
          >
            ثبت آدرس
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}

export default CheckoutAddressForm;
