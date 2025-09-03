import { Input } from "@heroui/input";

interface TextInputProps {
  label: string;
  name: string;
}

function TextInput({ label, name }: TextInputProps) {
  return (
    <Input
      label={`${label}:`}
      name={name}
      labelPlacement="outside-top"
      type="text"
    />
  );
}

export default TextInput;
