import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ثبت نام",
  description: "ثبت نام در فروشگاه اینترنتی برفا",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
