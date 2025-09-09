"use client";

import { updateUser } from "@/app/_lib/actions";
import { useUserStore } from "@/app/_store/userStore";
import { convertToPersian } from "@/app/_utils/helper";
import { updateUserValidation } from "@/app/_utils/validation";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Form } from "@heroui/form";
import { Spinner } from "@heroui/spinner";
import { addToast } from "@heroui/toast";
import { useState } from "react";
import { useShallow } from "zustand/shallow";
import DoubleInputWrapper from "../../Common/FormInputs/DoubleInputWrapper";
import EmailInput from "../../Common/FormInputs/EmailInput";
import FirstNameInput from "../../Common/FormInputs/FirstNameInput";
import LastNameInput from "../../Common/FormInputs/LastNameInput";
import PasswordInput from "../../Common/FormInputs/PasswordInput";
import PhoneInput from "../../Common/FormInputs/PhoneInput";

function AccountForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [passwordKey, setPasswordKey] = useState(0);

  const { firstName, lastName, email, phone, isInitialized, setInitialUser } =
    useUserStore(
      useShallow((state) => ({
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        phone: state.phone,
        isInitialized: state.isInitialized,
        setInitialUser: state.setInitialUser,
      })),
    );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData) as Record<string, string>;

    if (
      data.firstName === firstName &&
      data.lastName === lastName &&
      data.email === email &&
      convertToPersian(data.phone, false) === phone &&
      !data.newPassword &&
      !data.repeatPassword
    ) {
      addToast({
        title: "تغییری برای اعمال وجود ندارد",
        variant: "bordered",
        color: "warning",
      });
      return;
    }

    const toUpdateUser = {
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.trim(),
      phone: convertToPersian(data.phone, false),
      newPassword: data.newPassword,
    };

    const validationErrors = updateUserValidation({
      ...toUpdateUser,
      repeatPassword: data.repeatPassword,
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setErrors({});

    setIsLoading(true);

    const { error, updatedUser } = await updateUser(toUpdateUser);

    setIsLoading(false);

    if (error) {
      addToast({
        title: error,
        variant: "bordered",
        color: "danger",
      });
    } else if (updatedUser) {
      addToast({
        title: "اطلاعات با موفقیت تغییر کردند",
        variant: "bordered",
        color: "success",
      });

      setInitialUser(updatedUser);
      setPasswordKey((prev) => prev + 2);
    }
  }

  // FIXME: Add skeleton later
  if (!isInitialized) return <p>Loading...</p>;

  return (
    <Card>
      <CardHeader>
        <h3 className="font-black sm:text-lg">اطلاعات حساب کاربری</h3>
      </CardHeader>
      <CardBody>
        <Form
          className="space-y-4 text-right"
          onSubmit={handleSubmit}
          validationErrors={errors}
        >
          <DoubleInputWrapper>
            <FirstNameInput defaultValue={firstName} />
            <LastNameInput defaultValue={lastName} />
          </DoubleInputWrapper>
          <DoubleInputWrapper>
            <PhoneInput defaultValue={phone} />
            <EmailInput defaultValue={email} />
          </DoubleInputWrapper>
          <DoubleInputWrapper>
            <PasswordInput
              key={passwordKey}
              name="newPassword"
              label="رمز عبور جدید"
            />
            <PasswordInput
              key={passwordKey + 1}
              name="repeatPassword"
              label="تکرار رمز عبور"
            />
          </DoubleInputWrapper>
          <Button
            className="w-full sm:mx-auto sm:w-48"
            color="primary"
            type="submit"
            isDisabled={isLoading}
          >
            {isLoading ? <Spinner size="sm" color="white" /> : "اعمال تغییرات"}
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}

export default AccountForm;
