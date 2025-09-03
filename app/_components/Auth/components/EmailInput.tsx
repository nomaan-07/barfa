import { Input } from "@heroui/input";

function EmailInput() {
  return (
    <Input
      label="ایمیل:"
      labelPlacement="outside-top"
      style={{ direction: "ltr" }}
      type="email"
      name="email"
      placeholder="example@email.com"
    />
  );
}

export default EmailInput;
