import Banners from "../_components/Home/Banners";
import Brands from "../_components/Home/Brands";
import Categories from "../_components/Home/Categories";
import Hero from "../_components/Home/Hero";
import NewProducts from "../_components/Home/NewProducts";
import Offers from "../_components/Home/Offers";

export default function Page() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-7xl space-y-16 px-6 md:space-y-24">
        <Offers />
        <Categories />
        <Banners />
        <NewProducts />
        <Brands />
      </div>
    </>
  );
}
