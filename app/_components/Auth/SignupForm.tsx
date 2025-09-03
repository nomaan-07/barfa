"use client";

import { signupUser } from "@/app/_lib/actions";
import { Form } from "@heroui/form";
import { useState } from "react";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import SubmitButton from "./components/SubmitButton";
import TextInput from "./components/TextInput";
import { useRouter } from "next/navigation";

function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData);

    const firstName = data.firstName as string;

    if (!firstName.trim()) {
      setErrors({ firstName: "این فیلد نمی‌تواند خالی باشد" });
      return;
    }

    setIsLoading(true);

    try {
      await signupUser(formData);
      router.push("/");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form className="my-6" onSubmit={handleSubmit} validationErrors={errors}>
      <TextInput label="نام" name="firstName" />
      <TextInput label="نام خانوادگی" name="lastName" />
      <TextInput label="شماره تلفن" name="phone" direction="ltr" />
      <EmailInput />
      <PasswordInput variant="signup" />
      <SubmitButton title="ثبت نام" isLoading={isLoading} />
    </Form>
  );
}

export default SignupForm;
