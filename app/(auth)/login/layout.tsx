import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ورود",
  description: "ورود به فروشگاه اینترنتی برفا",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="w-75 space-y-4">{children}</main>
    </div>
  );
}
