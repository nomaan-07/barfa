import TextInput from "./TextInput";
import { InputBaseTypes } from "./types";

function PhoneInput({ defaultValue }: InputBaseTypes) {
  return (
    <TextInput
      label="شماره تلفن"
      name="phone"
      direction="ltr"
      maxLength={11}
      placeholder="09*********"
      defaultValue={defaultValue}
    />
  );
}

export default PhoneInput;
