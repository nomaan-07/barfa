import { useUserStore } from "@/app/_store/userStore";
import { convertToPersian } from "@/app/_utils/helper";
import { Address } from "@/app/_utils/types";
import { AddressValidation } from "@/app/_utils/validation";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Form } from "@heroui/form";
import { Key, useState } from "react";
import { useShallow } from "zustand/shallow";
import AddressInput from "../../Common/FormInputs/AddressInput";
import BuildingNumberInput from "../../Common/FormInputs/BuildingNumberInput";
import DoubleInputWrapper from "../../Common/FormInputs/DoubleInputWrapper";
import EmailInput from "../../Common/FormInputs/EmailInput";
import FirstNameInput from "../../Common/FormInputs/FirstNameInput";
import LastNameInput from "../../Common/FormInputs/LastNameInput";
import PhoneInput from "../../Common/FormInputs/PhoneInput";
import PostalCodeInput from "../../Common/FormInputs/PostalCodeInput";
import CheckoutLocations from "./CheckoutLocations";

interface CheckoutAddressFormProps {
  onSaveAddress: (address: Address) => void;
  address: Address | null;
}

export function CheckoutAddressForm({
  onSaveAddress,
  address,
}: CheckoutAddressFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [province, setProvince] = useState<string>(address?.province || "");
  const [city, setCity] = useState<string>(address?.city || "");

  const { firstName, lastName, email, phone } = useUserStore(
    useShallow((state) => ({
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      phone: state.phone,
    })),
  );

  function handleSelectProvince(key: Key | null) {
    if (key === null) return;
    setProvince(key.toString());
  }

  function handleSelectCity(key: Key | null) {
    if (key === null) return;
    setCity(key.toString());
  }

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
      phone: convertToPersian(phone, false),
      address,
      postalCode: convertToPersian(postalCode, false),
      buildingNumber,
      province,
      city,
    };

    const validationErrors = AddressValidation(addressObj);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setErrors({});

    onSaveAddress(addressObj);
  }

  return (
    <Card>
      <CardHeader>
        <h2 className="font-black sm:text-lg">آدرس</h2>
      </CardHeader>
      <CardBody>
        <Form
          className="space-y-4 text-right"
          onSubmit={handleSubmit}
          validationErrors={errors}
        >
          <CheckoutLocations
            province={province}
            city={city}
            onSelectProvince={handleSelectProvince}
            onSelectCity={handleSelectCity}
          />
          <DoubleInputWrapper>
            <FirstNameInput defaultValue={address?.firstName || firstName} />
            <LastNameInput defaultValue={address?.lastName || lastName} />
          </DoubleInputWrapper>
          <DoubleInputWrapper>
            <PhoneInput defaultValue={address?.phone || phone} />
            <EmailInput defaultValue={address?.email || email} />
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
