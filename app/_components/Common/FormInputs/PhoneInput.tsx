import TextInput from "./TextInput";

interface PhoneInputProps {
  defaultValue?: string;
}

function PhoneInput({ defaultValue }: PhoneInputProps) {
  return (
    <TextInput
      label="شماره تلفن"
      name="phone"
      direction="ltr"
      maxLength={11}
      placeholder="09*********"
      defaultValue={defaultValue}
    />
  );
}

export default PhoneInput;
