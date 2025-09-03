import AuthSwitchLink from "@/app/_components/Auth/components/AuthSwitchLink";
import AuthTitle from "@/app/_components/Auth/components/AuthTitle";
import LoginForm from "@/app/_components/Auth/LoginForm";

function LoginPage() {
  return (
    <>
      <AuthTitle title="ورود با ایمیل" />
      <LoginForm />
      <AuthSwitchLink variant="login" />
    </>
  );
}

export default LoginPage;
