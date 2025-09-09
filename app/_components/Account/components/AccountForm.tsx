"use client";

import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Form } from "@heroui/form";
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
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
