import TextInput from "./TextInput";

interface EmailInputProps {
  defaultValue?: string;
}

function EmailInput({ defaultValue }: EmailInputProps) {
  return (
    <TextInput
      label="ایمیل"
      name="email"
      direction="ltr"
      maxLength={254}
      placeholder="example@email.com"
      defaultValue={defaultValue}
    />
  );
}

export default EmailInput;
