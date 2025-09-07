import TextInput from "./TextInput";
import { InputBaseTypes } from "./types";

function AddressInput({ defaultValue }: InputBaseTypes) {
  return (
    <TextInput
      label="آدرس کامل"
      name="address"
      maxLength={250}
      defaultValue={defaultValue}
    />
  );
}

export default AddressInput;
