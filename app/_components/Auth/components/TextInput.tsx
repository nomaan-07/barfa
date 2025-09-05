import { Input } from "@heroui/input";

interface TextInputProps {
  label: string;
  name: string;
  direction?: "ltr" | "rtl";
  maxLength: number;
  placeholder?: string;
}

function TextInput({
  label,
  name,
  maxLength,
  placeholder,
  direction = "rtl",
}: TextInputProps) {
  return (
    <Input
      label={`${label}:`}
      name={name}
      labelPlacement="outside-top"
      type="text"
      maxLength={maxLength}
      placeholder={placeholder}
      style={{
        direction: direction === "ltr" ? "ltr" : "rtl",
      }}
    />
  );
}

export default TextInput;
