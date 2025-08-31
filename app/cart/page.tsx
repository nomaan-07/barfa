import Cart from "../_components/Cart";

function CartPage() {
  return (
    <div className="mx-auto mt-4 max-w-7xl space-y-2 px-6 sm:space-y-6">
      <div className="after:bg-default relative w-fit after:absolute after:top-7 after:h-0.5 after:w-full after:ring-0 after:content-[''] sm:after:top-8 md:after:top-9">
        <h1 className="text-lg font-black sm:text-xl md:text-2xl">سبد خرید</h1>
      </div>
      <Cart variant="page" />
    </div>
  );
}

export default CartPage;
