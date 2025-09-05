import { convertToEnglish } from "./helper";

const minLengthValidation = (value: string, minLength: number) =>
  value.trim().length >= minLength;

function nameValidation(value: string) {
  const trimmedValue = value.trim();
  const regex = /^[آ-ی\s]+$/;

  if (!regex.test(trimmedValue)) return;
  if (!minLengthValidation(trimmedValue, 3)) return;

  return true;
}

function phoneValidation(value: string) {
  const trimmedValue = value.trim();
  const regex = /^[0-9۰-۹]+$/;

  if (!regex.test(trimmedValue)) return;
  if (trimmedValue.length !== 11) return;

  if (!convertToEnglish(trimmedValue).startsWith("09")) return;

  return true;
}

function emailValidation(value: string) {
  const trimmedValue = value.trim();
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!trimmedValue.length) return;
  if (!regex.test(trimmedValue)) return;

  return true;
}

interface signupOptions {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
}

export function signupValidation({
  firstName,
  lastName,
  phone,
  email,
  password,
}: signupOptions) {
  const errors: Record<string, string> = {};

  if (!nameValidation(firstName))
    errors.firstName = "نام باید حداقل ۳ حرف و فقط شامل حروف فارسی باشد";

  if (!nameValidation(lastName))
    errors.lastName =
      "نام خانوادگی باید حداقل ۳ حرف و فقط شامل حروف فارسی باشد";

  if (!phoneValidation(phone))
    errors.phone = "شماره تلفن باید ۱۱ رقم باشد و با ۰۹ شروع شود";

  if (!emailValidation(email))
    errors.email = errors.email =
      "ایمیل معتبر وارد کنید (مثال: example@email.com)";

  if (!minLengthValidation(password, 8))
    errors.password = "رمز عبور باید حداقل ۸ کاراکتر باشد";

  return errors;
}

interface loginOptions {
  email: string;
  password: string;
}

export function loginValidation({ email, password }: loginOptions) {
  const errors: Record<string, string> = {};

  if (!emailValidation(email))
    errors.email = errors.email =
      "ایمیل معتبر وارد کنید (مثال: example@email.com)";

  if (!minLengthValidation(password, 8))
    errors.password = "رمز عبور باید حداقل ۸ کاراکتر باشد";

  return errors;
}
