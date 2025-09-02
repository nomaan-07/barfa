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
  return <>{children}</>;
}
