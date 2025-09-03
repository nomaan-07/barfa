import AuthCard from "../_components/Auth/components/AuthCard";
import AuthTerms from "../_components/Auth/components/AuthTerms";
import Logo from "../_components/Logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center py-4">
      <main className="flex w-75 flex-col items-center gap-4">
        <Logo />
        <AuthCard>{children}</AuthCard>
        <AuthTerms />
      </main>
    </div>
  );
}
