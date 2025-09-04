"use client";

import { loginUser } from "@/app/_lib/actions";
import { Form } from "@heroui/form";
import { addToast } from "@heroui/toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import SubmitButton from "./components/SubmitButton";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData);

    const password = data.password as string;

    // TODO: Validation
    if (!password.trim()) {
      setErrors({ password: "این فیلد نمی‌تواند خالی باشد" });
      return;
    }

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
