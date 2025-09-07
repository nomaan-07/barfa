import { Input } from "@heroui/input";
import { TextInputProps } from "./types";

function TextInput({
  label,
  name,
  maxLength,
  placeholder,
  direction = "rtl",
  defaultValue,
}: TextInputProps) {
  return (
    <Input
      label={`${label}:`}
      name={name}
      labelPlacement="outside-top"
      type="text"
      maxLength={maxLength}
      placeholder={placeholder}
      defaultValue={defaultValue}
      style={{
        direction: direction === "ltr" ? "ltr" : "rtl",
      }}
    />
  );
}

export default TextInput;
