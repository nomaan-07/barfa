"use client";

import { loginUser } from "@/app/_lib/actions";
import { loginValidation } from "@/app/_utils/validation";
import { Form } from "@heroui/form";
import { addToast } from "@heroui/toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import EmailInput from "../Common/FormInputs/EmailInput";
import PasswordInput from "../Common/FormInputs/PasswordInput";
import SubmitButton from "./components/SubmitButton";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const { email, password } = Object.fromEntries(formData) as {
      email: string;
      password: string;
    };

    const validationErrors = loginValidation({
      email,
      password,
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setErrors({});

    setIsLoading(true);

    const { error } = await loginUser(formData);

    setIsLoading(false);

    if (error) {
      addToast({
        title: error,
        variant: "bordered",
        color: "danger",
      });
    } else {
      addToast({
        title: "با موفقیت وارد شدید",
        variant: "bordered",
        color: "success",
      });
      router.push("/");
    }
  }

  return (
    <Form className="my-6" onSubmit={handleSubmit} validationErrors={errors}>
      <EmailInput />
      <PasswordInput variant="login" />
      <SubmitButton title="ورود" isLoading={isLoading} />
    </Form>
  );
}

export default LoginForm;
