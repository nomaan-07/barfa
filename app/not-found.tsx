import NotFoundPage from "./_components/Common/NotFoundPage";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function RootNotFound() {
  return (
    <>
      <Header />
      <main className="mb-16 md:bottom-24">
        <NotFoundPage />
      </main>
      <Footer />
    </>
  );
}
