import AuthSwitchLink from "@/app/_components/Auth/components/AuthSwitchLink";
import AuthTitle from "@/app/_components/Auth/components/AuthTitle";
import SignupForm from "@/app/_components/Auth/SignupForm";

function SignupPage() {
  return (
    <>
      <AuthTitle title="عضویت" />
      <SignupForm />
      <AuthSwitchLink variant="signup" />
    </>
  );
}

export default SignupPage;
