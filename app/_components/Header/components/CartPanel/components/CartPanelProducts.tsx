import CartPanelProduct from "./CartPanelProduct";

const fakeProducts = [
  {
    id: 1,
    imageSrc:
      "https://yseozmctkahaaxecwmyn.supabase.co/storage/v1/object/public/barfa-products/mobile/samsung/A56/samsung-A56-olive.png",
    title:
      "گوشی موبایل سامسونگ مدل Galaxy A56 دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",

    color: {
      fa: "طلایی",
      en: "gold",
      value: "#E8DAAB",
    },
    insurance: {
      title: "بیمه تجهیزات الکترونیک - بیمه بردیا",
      price: 664440,
    },
    warranty: "گارانتی ۱۸ ماهه همراه پخش آینده",
    quantity: 3,
    selectedQuantity: 1,
    discountPercent: 4,
    originalPrice: 33900000,
    finalPrice: 33886440,
  },
  {
    id: 2,
    imageSrc:
      "https://yseozmctkahaaxecwmyn.supabase.co/storage/v1/object/public/barfa-products/mobile/samsung/A56/samsung-A56-olive.png",
    title:
      "گوشی موبایل سامسونگ مدل Galaxy A56 دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",

    color: {
      fa: "سفید",
      en: "white",
      value: "#fff",
    },
    insurance: {
      title: "بیمه تجهیزات الکترونیک - بیمه بردیا",
      price: 664440,
    },
    warranty: "گارانتی ۱۸ ماهه همراه پخش آینده",
    quantity: 9,
    selectedQuantity: 1,
    discountPercent: 0,
    originalPrice: 33886440,
    finalPrice: 33886440,
  },
  {
    id: 3,
    imageSrc:
      "https://yseozmctkahaaxecwmyn.supabase.co/storage/v1/object/public/barfa-products/mobile/samsung/A56/samsung-A56-olive.png",
    title:
      "گوشی موبایل سامسونگ مدل Galaxy A56 دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",

    color: {
      fa: "مشکی",
      en: "black",
      value: "#000",
    },
    insurance: {
      title: "بیمه تجهیزات الکترونیک - بیمه بردیا",
      price: 664440,
    },
    warranty: "گارانتی ۱۸ ماهه همراه پخش آینده",
    quantity: 5,
    selectedQuantity: 1,
    discountPercent: 4,
    originalPrice: 33900000,
    finalPrice: 33886440,
  },
  {
    id: 4,
    imageSrc:
      "https://yseozmctkahaaxecwmyn.supabase.co/storage/v1/object/public/barfa-products/mobile/samsung/A56/samsung-A56-olive.png",
    title:
      "گوشی موبایل سامسونگ مدل Galaxy A56 دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",

    color: {
      fa: "مشکی",
      en: "black",
      value: "#000",
    },
    insurance: {
      title: "بیمه تجهیزات الکترونیک - بیمه بردیا",
      price: 664440,
    },
    warranty: "گارانتی ۱۸ ماهه همراه پخش آینده",
    quantity: 5,
    selectedQuantity: 1,
    discountPercent: 4,
    originalPrice: 33900000,
    finalPrice: 33886440,
  },
];

function CartPanelProducts() {
  return (
    <div className="divide-default-200 h-96 divide-y">
      {fakeProducts.map((product) => (
        <CartPanelProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CartPanelProducts;
