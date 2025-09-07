import TextInput from "./TextInput";

interface FirstNameInputProps {
  defaultValue?: string;
}

function FirstNameInput({ defaultValue }: FirstNameInputProps) {
  return (
    <TextInput
      label="نام"
      name="firstName"
      maxLength={15}
      defaultValue={defaultValue}
    />
  );
}

export default FirstNameInput;
