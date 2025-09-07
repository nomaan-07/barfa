import TextInput from "./TextInput";
import { InputBaseTypes } from "./types";

function EmailInput({ defaultValue }: InputBaseTypes) {
  return (
    <TextInput
      label="ایمیل"
      name="email"
      direction="ltr"
      maxLength={254}
      placeholder="example@email.com"
      defaultValue={defaultValue}
    />
  );
}

export default EmailInput;
