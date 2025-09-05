"use client";

import { signupUser } from "@/app/_lib/actions";
import { signupValidation } from "@/app/_utils/validation";
import { Form } from "@heroui/form";
import { addToast } from "@heroui/toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PasswordInput from "./components/PasswordInput";
import SubmitButton from "./components/SubmitButton";
import TextInput from "./components/TextInput";

function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

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

    // TODO: Validation
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
      router.push("/");
    }
  }

  return (
    <Form className="my-6" onSubmit={handleSubmit} validationErrors={errors}>
      <TextInput label="نام" name="firstName" maxLength={15} />
      <TextInput label="نام خانوادگی" name="lastName" maxLength={15} />
      <TextInput
        label="شماره تلفن"
        name="phone"
        direction="ltr"
        maxLength={11}
        placeholder="09*********"
      />
      <TextInput
        label="ایمیل"
        name="email"
        direction="ltr"
        maxLength={254}
        placeholder="example@email.com"
      />

      <PasswordInput variant="signup" />
      <SubmitButton title="ثبت نام" isLoading={isLoading} />
    </Form>
  );
}

export default SignupForm;
