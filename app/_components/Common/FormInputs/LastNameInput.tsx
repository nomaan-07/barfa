import TextInput from "./TextInput";

interface LastNameInputProps {
  defaultValue?: string;
}

function LastNameInput({ defaultValue }: LastNameInputProps) {
  return (
    <TextInput
      label="نام خانوادگی"
      name="lastName"
      maxLength={15}
      defaultValue={defaultValue}
    />
  );
}

export default LastNameInput;
