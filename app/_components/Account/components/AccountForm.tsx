"use client";

import { updateUserValidation } from "@/app/_utils/validation";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Form } from "@heroui/form";
import { addToast } from "@heroui/toast";
import { useState } from "react";
import DoubleInputWrapper from "../../Common/FormInputs/DoubleInputWrapper";
import EmailInput from "../../Common/FormInputs/EmailInput";
import FirstNameInput from "../../Common/FormInputs/FirstNameInput";
import LastNameInput from "../../Common/FormInputs/LastNameInput";
import PasswordInput from "../../Common/FormInputs/PasswordInput";
import PhoneInput from "../../Common/FormInputs/PhoneInput";

interface AccountFormProps {
  user: { firstName: string; lastName: string; email: string; phone: string };
}

function AccountForm({ user }: AccountFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const { firstName, lastName, email, phone, newPassword, repeatPassword } =
      Object.fromEntries(formData) as {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        newPassword: string;
        repeatPassword: string;
      };

    if (
      firstName === user.firstName &&
      lastName === user.lastName &&
      email === user.email &&
      phone === user.phone &&
      !newPassword &&
      !repeatPassword
    ) {
      addToast({
        title: "تغییری برای ذخیره کردن وجود ندارد",
        variant: "bordered",
        color: "warning",
      });
      return;
    }

    const validationErrors = updateUserValidation({
      firstName,
      lastName,
      email,
      phone,
      newPassword,
      repeatPassword,
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setErrors({});

    setIsLoading(true);
  }

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
            <FirstNameInput defaultValue={user.firstName} />
            <LastNameInput defaultValue={user.lastName} />
          </DoubleInputWrapper>
          <DoubleInputWrapper>
            <PhoneInput defaultValue={user.phone} />
            <EmailInput defaultValue={user.email} />
          </DoubleInputWrapper>
          <DoubleInputWrapper>
            <PasswordInput name="newPassword" label="رمز عبور جدید" />
            <PasswordInput name="repeatPassword" label="تکرار رمز عبور" />
          </DoubleInputWrapper>
          <Button
            className="w-full sm:mx-auto sm:w-48"
            color="primary"
            type="submit"
          >
            اعمال تغییرات
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}

export default AccountForm;
