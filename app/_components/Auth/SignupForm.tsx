"use client";

import { signupUser } from "@/app/_lib/actions";
import { signupValidation } from "@/app/_utils/validation";
import { Form } from "@heroui/form";
import { addToast } from "@heroui/toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import EmailInput from "../Common/FormInputs/EmailInput";
import FirstNameInput from "../Common/FormInputs/FirstNameInput";
import LastNameInput from "../Common/FormInputs/LastNameInput";
import PasswordInput from "../Common/FormInputs/PasswordInput";
import PhoneInput from "../Common/FormInputs/PhoneInput";
import SubmitButton from "./components/SubmitButton";

function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();
  const searchParams = useSearchParams();
  const backTo = searchParams.get("backTo");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const { firstName, lastName, email, phone, password } = Object.fromEntries(
      formData,
    ) as {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      password: string;
    };

    const validationErrors = signupValidation({
      firstName,
      lastName,
      email,
      phone,
      password,
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setErrors({});

    setIsLoading(true);

    const { error } = await signupUser(formData);

    setIsLoading(false);

    if (error) {
      addToast({
        title: error,
        variant: "bordered",
        color: "danger",
      });
    } else {
      addToast({
        title: "ثبت‌نام شما با موفقیت انجام شد",
        variant: "bordered",
        color: "success",
      });
      router.push(backTo ?? "/");
    }
  }

  return (
    <Form className="my-6" onSubmit={handleSubmit} validationErrors={errors}>
      <FirstNameInput />
      <LastNameInput />
      <PhoneInput />
      <EmailInput />
      <PasswordInput />
      <SubmitButton title="ثبت نام" isLoading={isLoading} />
    </Form>
  );
}

export default SignupForm;
