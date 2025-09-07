import TextInput from "./TextInput";
import { InputBaseTypes } from "./types";

function FirstNameInput({ defaultValue }: InputBaseTypes) {
  return (
    <TextInput
      label="نام"
      name="firstName"
      maxLength={15}
      defaultValue={defaultValue}
    />
  );
}

export default FirstNameInput;
