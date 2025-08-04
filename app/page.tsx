import Hero from "./_components/Home/Hero";
import Offers from "./_components/Home/Offers";

export default function Page() {
  return (
    <>
      <Hero />
      <div className="px-6">
        <Offers />
      </div>
    </>
  );
}
