import { Form } from "@heroui/form";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import SubmitButton from "./components/SubmitButton";
import TextInput from "./components/TextInput";

function SignupForm() {
  return (
    <Form className="my-6">
      <TextInput label="نام" />
      <TextInput label="نام خانوادگی" />
      <EmailInput />
      <PasswordInput variant="signup" />
      <SubmitButton title="ثبت نام" />
    </Form>
  );
}

export default SignupForm;
