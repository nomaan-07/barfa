import { convertToEnglish } from "./helper";
import { Address } from "./types";

function onlyNumberValidation(value: string) {
  const regex = /^[0-9۰-۹]+$/;
  if (!regex.test(value)) return;

  return true;
}

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

  if (trimmedValue.length !== 11) return;

  if (!onlyNumberValidation(trimmedValue)) return;
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

function postalCodeValidation(value: string) {
  const trimmedValue = value.trim();

  if (trimmedValue.length !== 10) return;
  if (!onlyNumberValidation(trimmedValue)) return;
  return true;
}

interface SignupOptions {
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
}: SignupOptions) {
  const errors: Record<string, string> = {};

  if (!nameValidation(firstName))
    errors.firstName = "نام باید حداقل ۳ حرف و فقط شامل حروف فارسی باشد";

  if (!nameValidation(lastName))
    errors.lastName =
      "نام خانوادگی باید حداقل ۳ حرف و فقط شامل حروف فارسی باشد";

  if (!phoneValidation(phone))
    errors.phone = "شماره تلفن باید ۱۱ رقم باشد و با ۰۹ شروع شود";

  if (!emailValidation(email))
    errors.email = "ایمیل معتبر وارد کنید (مثال: example@email.com)";

  if (!minLengthValidation(password, 8))
    errors.password = "رمز عبور باید حداقل ۸ کاراکتر باشد";

  return errors;
}

interface LoginOptions {
  email: string;
  password: string;
}

export function loginValidation({ email, password }: LoginOptions) {
  const errors: Record<string, string> = {};

  if (!emailValidation(email))
    errors.email = "ایمیل معتبر وارد کنید (مثال: example@email.com)";

  if (!minLengthValidation(password, 8))
    errors.password = "رمز عبور باید حداقل ۸ کاراکتر باشد";

  return errors;
}

export function AddressValidation({
  firstName,
  lastName,
  phone,
  email,
  address,
  buildingNumber,
  postalCode,
  province,
  city,
}: Address) {
  const errors: Record<string, string> = {};

  if (!nameValidation(firstName))
    errors.firstName = "نام باید حداقل ۳ حرف و فقط شامل حروف فارسی باشد";

  if (!nameValidation(lastName))
    errors.lastName =
      "نام خانوادگی باید حداقل ۳ حرف و فقط شامل حروف فارسی باشد";

  if (!phoneValidation(phone))
    errors.phone = "شماره تلفن باید ۱۱ رقم باشد و با ۰۹ شروع شود";

  if (!emailValidation(email))
    errors.email = "ایمیل معتبر وارد کنید (مثال: example@email.com)";

  if (!minLengthValidation(address, 10))
    errors.address = " آدرس باید حداقل ۱۰ کاراکتر باشد";

  if (!minLengthValidation(buildingNumber, 1))
    errors.buildingNumber = "لطفا پلاک را وارد کنید";

  if (!postalCodeValidation(postalCode))
    errors["postal-code"] = "کد پستی یک عدد ۱۰ رقمی است";

  if (!province) errors.province = "لطفا استان خود را انتخاب کنید";
  if (!city) errors.city = "لطفا شهر خود را انتخاب کنید";

  return errors;
}

interface UpdateUserOptions {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  newPassword: string;
  repeatPassword: string;
}

export function updateUserValidation({
  firstName,
  lastName,
  phone,
  email,
  newPassword,
  repeatPassword,
}: UpdateUserOptions) {
  const errors: Record<string, string> = {};

  if (!nameValidation(firstName))
    errors.firstName = "نام باید حداقل ۳ حرف و فقط شامل حروف فارسی باشد";

  if (!nameValidation(lastName))
    errors.lastName =
      "نام خانوادگی باید حداقل ۳ حرف و فقط شامل حروف فارسی باشد";

  if (!phoneValidation(phone))
    errors.phone = "شماره تلفن باید ۱۱ رقم باشد و با ۰۹ شروع شود";

  if (!emailValidation(email))
    errors.email = "ایمیل معتبر وارد کنید (مثال: example@email.com)";

  if (newPassword || repeatPassword) {
    if (!minLengthValidation(newPassword, 8)) {
      errors.newPassword = "رمز عبور باید حداقل ۸ کاراکتر باشد";
      return errors;
    }

    if (newPassword !== repeatPassword)
      errors.repeatPassword = "رمز عبور و تکرار آن یکسان نیستند";
  }

  return errors;
}
