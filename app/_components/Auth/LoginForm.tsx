"use client";

import { Form } from "@heroui/form";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import SubmitButton from "./components/SubmitButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/app/_lib/actions";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData);

    const password = data.password as string;

    if (!password.trim()) {
      setErrors({ password: "این فیلد نمی‌تواند خالی باشد" });
      return;
    }

    setIsLoading(true);

    try {
      await loginUser(formData);
      router.push("/");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
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
