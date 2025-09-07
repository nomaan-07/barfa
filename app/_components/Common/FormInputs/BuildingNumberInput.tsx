import TextInput from "./TextInput";
import { InputBaseTypes } from "./types";

function BuildingNumberInput({ defaultValue }: InputBaseTypes) {
  return (
    <TextInput
      label="پلاک"
      maxLength={6}
      name="buildingNumber"
      defaultValue={defaultValue}
    />
  );
}

export default BuildingNumberInput;
