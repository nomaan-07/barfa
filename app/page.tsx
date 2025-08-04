import Categories from "./_components/Home/Categories";
import Hero from "./_components/Home/Hero";
import Offers from "./_components/Home/Offers";

export default function Page() {
  return (
    <main className="space-y-12 pb-40">
      <Hero />
      <div className="mx-auto max-w-7xl space-y-12 px-6">
        <Offers />
        <Categories />
      </div>
    </main>
  );
}
