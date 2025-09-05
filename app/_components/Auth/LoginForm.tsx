"use client";

import { loginUser } from "@/app/_lib/actions";
import { loginValidation } from "@/app/_utils/validation";
import { Form } from "@heroui/form";
import { addToast } from "@heroui/toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PasswordInput from "./components/PasswordInput";
import SubmitButton from "./components/SubmitButton";
import TextInput from "./components/TextInput";

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
      <TextInput
        label="ایمیل"
        name="email"
        direction="ltr"
        maxLength={254}
        placeholder="example@email.com"
      />
      <PasswordInput variant="login" />
      <SubmitButton title="ورود" isLoading={isLoading} />
    </Form>
  );
}

export default LoginForm;
