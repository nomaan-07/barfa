import Link from "next/link";

function AuthTerms() {
  return (
    <div className="text-center text-sm">
      با عضویت در سایت، همه‌ی{" "}
      <Link href="/terms" className="text-primary">
        قوانین و شرایط
      </Link>{" "}
      برفا را پذیرفته‌اید.
    </div>
  );
}

export default AuthTerms;
