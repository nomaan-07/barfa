import Footer from "../_components/Footer";
import Header from "../_components/Header";
import MobileHeader from "../_components/Header/components/MobileHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <MobileHeader />
      <main className="mb-16 space-y-16 md:bottom-24 md:space-y-24">
        {children}
      </main>
      <Footer />
    </>
  );
}
