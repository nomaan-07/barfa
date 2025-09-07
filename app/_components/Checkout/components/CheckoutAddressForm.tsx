import { useUserStore } from "@/app/_store/userStore";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Form } from "@heroui/form";
import { useShallow } from "zustand/shallow";
import AddressInput from "../../Common/FormInputs/AddressInput";
import BuildingNumberInput from "../../Common/FormInputs/BuildingNumberInput";
import DoubleInputWrapper from "../../Common/FormInputs/DoubleInputWrapper";
import EmailInput from "../../Common/FormInputs/EmailInput";
import FirstNameInput from "../../Common/FormInputs/FirstNameInput";
import LastNameInput from "../../Common/FormInputs/LastNameInput";
import PhoneInput from "../../Common/FormInputs/PhoneInput";
import PostalCodeInput from "../../Common/FormInputs/PostalCodeInput";

function CheckoutAddressForm() {
  const { firstName, lastName, email, phone } = useUserStore(
    useShallow((state) => ({
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      phone: state.phone,
    })),
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <h2 className="font-black sm:text-lg">آدرس</h2>
      </CardHeader>
      <CardBody>
        <Form className="space-y-4 text-right">
          <DoubleInputWrapper>
            <FirstNameInput defaultValue={firstName} />
            <LastNameInput defaultValue={lastName} />
          </DoubleInputWrapper>
          <DoubleInputWrapper>
            <PhoneInput defaultValue={phone} />
            <EmailInput defaultValue={email} />
          </DoubleInputWrapper>
          <AddressInput />
          <DoubleInputWrapper>
            <PostalCodeInput />
            <BuildingNumberInput />
          </DoubleInputWrapper>
          <Button className="sm:mx-auto sm:w-48" color="primary" type="submit">
            ثبت آدرس
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}

export default CheckoutAddressForm;
