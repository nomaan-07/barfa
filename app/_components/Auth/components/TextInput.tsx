import { Input } from "@heroui/input";
import clsx from "clsx";

interface TextInputProps {
  label: string;
  name: string;
  direction?: "ltr" | "rtl";
}

function TextInput({ label, name, direction }: TextInputProps) {
  return (
    <Input
      label={`${label}:`}
      name={name}
      labelPlacement="outside-top"
      type="text"
      classNames={{
        input: clsx(direction === "ltr" && "text-left"),
      }}
    />
  );
}

export default TextInput;
