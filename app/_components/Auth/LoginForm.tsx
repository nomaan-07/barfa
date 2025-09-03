import { Form } from "@heroui/form";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import SubmitButton from "./components/SubmitButton";

function LoginForm() {
  return (
    <Form className="my-6">
      <EmailInput />
      <PasswordInput variant="login" />
      <SubmitButton title="ورود" />
    </Form>
  );
}

export default LoginForm;
