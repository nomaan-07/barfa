"use client";

import { Input } from "@heroui/input";
import { LucideEye, LucideEyeClosed } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PasswordInputProps } from "./types";

function PasswordInput({
  showForgotPassword,
  name = "password",
  label = "رمز عبور:",
}: PasswordInputProps) {
  const [isHidden, setIsHidden] = useState(true);

  const Icon = isHidden ? LucideEyeClosed : LucideEye;

  const handleToggleHidden = () => setIsHidden((prev) => !prev);

  return (
    <div className="w-full">
      <Input
        label={label}
        labelPlacement="outside-top"
        dir="ltr"
        type={isHidden ? "password" : "text"}
        name={name}
        placeholder="••••••••"
        startContent={
          <button
            type="button"
            className="md:hover:text-primary p-1 transition-colors md:cursor-pointer"
            aria-label={isHidden ? "نمایش رمز عبور" : "پنهان کردن رمز عبور"}
            onClick={handleToggleHidden}
          >
            <Icon className="size-5" />
          </button>
        }
      />
      {showForgotPassword && (
        <Link href="/" className="text-primary mt-2 block text-xs">
          فراموشی رمز عبور
        </Link>
      )}
    </div>
  );
}

export default PasswordInput;
