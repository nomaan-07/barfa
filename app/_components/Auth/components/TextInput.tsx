import { Input } from "@heroui/input";

interface TextInputProps {
  label: string;
}

function TextInput({ label }: TextInputProps) {
  return <Input label={`${label}:`} labelPlacement="outside-top" type="text" />;
}

export default TextInput;
