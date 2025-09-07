import TextInput from "./TextInput";
import { InputBaseTypes } from "./types";

function PostalCodeInput({ defaultValue }: InputBaseTypes) {
  return (
    <TextInput
      label="کد پستی"
      name="postal-code"
      maxLength={10}
      direction="ltr"
      defaultValue={defaultValue}
    />
  );
}

export default PostalCodeInput;
