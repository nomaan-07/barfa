import TextInput from "./TextInput";

function PostalCodeInput() {
  return (
    <TextInput
      label="کد پستی"
      name="postal-code"
      maxLength={10}
      direction="ltr"
    />
  );
}

export default PostalCodeInput;
