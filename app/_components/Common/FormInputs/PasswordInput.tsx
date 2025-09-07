"use client";

import { Input } from "@heroui/input";
import { LucideEye, LucideEyeClosed } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PasswordInputProps } from "./types";

function PasswordInput({ variant }: PasswordInputProps) {
  const [isHidden, setIsHidden] = useState(true);

  const Icon = isHidden ? LucideEyeClosed : LucideEye;

  const handleToggleHidden = () => setIsHidden((prev) => !prev);

  return (
    <div className="mb-2 w-full">
      <Input
        label="رمز عبور:"
        labelPlacement="outside-top"
        style={{ direction: "ltr" }}
        type={isHidden ? "password" : "text"}
        name="password"
        placeholder="••••••••"
        startContent={
          <Icon
            onClick={handleToggleHidden}
            className="md:hover:text-primary size-5 transition-colors md:cursor-pointer"
          />
        }
      />
      {variant === "login" && (
        <Link
          href="/forgot-password"
          className="text-primary mt-2 block text-xs"
        >
          فراموشی رمز عبور
        </Link>
      )}
    </div>
  );
}

export default PasswordInput;
