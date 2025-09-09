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
import { LucidePencil, LucideX } from "lucide-react";
import { useState } from "react";
import { useShallow } from "zustand/shallow";
import DoubleInputWrapper from "../../Common/FormInputs/DoubleInputWrapper";
import EmailInput from "../../Common/FormInputs/EmailInput";
import FirstNameInput from "../../Common/FormInputs/FirstNameInput";
import LastNameInput from "../../Common/FormInputs/LastNameInput";
import PasswordInput from "../../Common/FormInputs/PasswordInput";
import PhoneInput from "../../Common/FormInputs/PhoneInput";
import AccountEditButtonSkeleton from "./skeleton/AccountEditButtonSkeleton";

function AccountForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [passwordKey, setPasswordKey] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);

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

    const {
      firstName: firstNameInputValue,
      lastName: lastNameInputValue,
      email: emailInputValue,
      phone: phoneInputValue,
      newPassword: newPasswordInputValue,
      repeatPassword: repeatPasswordInputValue,
    } = Object.fromEntries(formData) as {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      newPassword: string;
      repeatPassword: string;
    };

    if (
      firstNameInputValue.trim() === firstName &&
      lastNameInputValue.trim() === lastName &&
      emailInputValue.trim() === email &&
      convertToPersian(phoneInputValue, false) === phone &&
      !newPasswordInputValue &&
      !repeatPasswordInputValue
    ) {
      addToast({
        title: "تغییری برای اعمال وجود ندارد",
        variant: "bordered",
        color: "warning",
      });
      return;
    }

    const toUpdateUser = {
      firstName: firstNameInputValue.trim(),
      lastName: lastNameInputValue.trim(),
      email: emailInputValue.trim(),
      phone: convertToPersian(phoneInputValue, false),
      newPassword: newPasswordInputValue,
    };

    const validationErrors = updateUserValidation({
      ...toUpdateUser,
      repeatPassword: repeatPasswordInputValue,
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
      setIsFormOpen(false);
    }
  }

  if (!isInitialized) return <AccountEditButtonSkeleton />;

  if (!isFormOpen)
    return (
      <Button
        onPress={() => setIsFormOpen(true)}
        color="warning"
        startContent={<LucidePencil size={16} />}
        size="lg"
        className="text-sm sm:text-base"
      >
        ویرایش اطلاعات حساب کاربری
      </Button>
    );

  if (isFormOpen)
    return (
      <Card>
        <CardHeader className="justify-between">
          <h3 className="font-black sm:text-lg">اطلاعات حساب کاربری</h3>
          <Button
            variant="flat"
            isIconOnly
            onPress={() => setIsFormOpen(false)}
          >
            <LucideX size={20} />
          </Button>
        </CardHeader>
        <CardBody>
          <Form
            className="gap-6 text-right"
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
              className="mx-auto w-48"
              color="primary"
              type="submit"
              isDisabled={isLoading}
            >
              {isLoading ? (
                <Spinner size="sm" color="white" />
              ) : (
                "اعمال تغییرات"
              )}
            </Button>
          </Form>
        </CardBody>
      </Card>
    );
}

export default AccountForm;
