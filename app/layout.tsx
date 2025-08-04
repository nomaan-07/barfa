import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Head from "next/head";
import Header from "./_components/Header";
import MobileHeader from "./_components/Header/MobileHeader";
import { Providers } from "./_providers/providers";
import "./_styles/globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | برفا",
    default: "برفا | فروشگاه اینترنتی تکنولوژی",
  },
  description:
    "تجربه خرید بهترین موبایل، لپ‌تاپ و محصولات دیجیتال از فروشگاه برفا",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="icon"
          href="/favicons/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicons/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicons/favicon-48x48.png"
          sizes="48x48"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicons/favicon-64x64.png"
          sizes="64x64"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicons/favicon-192x192.png"
          sizes="192x192"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicons/favicon-512x512.png"
          sizes="512x512"
          type="image/png"
        />

        <link
          rel="apple-touch-icon"
          href="/favicons/apple-touch-icon.png"
          sizes="180x180"
        />
      </Head>
      <body className={`${vazirmatn.variable} font-vazirmatn`}>
        <Providers>
          <Header />
          <MobileHeader />
          <main className="space-y-12 pb-40">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
