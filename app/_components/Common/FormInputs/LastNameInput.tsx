import TextInput from "./TextInput";
import { InputBaseTypes } from "./types";

function LastNameInput({ defaultValue }: InputBaseTypes) {
  return (
    <TextInput
      label="نام خانوادگی"
      name="lastName"
      maxLength={15}
      defaultValue={defaultValue}
    />
  );
}

export default LastNameInput;
