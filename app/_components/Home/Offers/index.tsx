import { getDiscountedProducts } from "@/app/_lib/data-service";
import ProductsSwiper from "../../Common/ProductsSwiper";
import SectionHeader from "../../Common/SectionHeader";

// const products = [
//   {
//     id: 1,
//     title:
//       "هدفون apple pro 2 هدفون apple pro 2 هدفون apple pro 2 هدفون apple pro 2",
//     imageSrc: "/hero/products.png",
//     price: 299945,
//     discountPercent: 0,
//     link: "/product/23",
//   },
//   {
//     id: 2,
//     title: "Smart Fitness Watch Smart Fitness Watch Smart Fitness Watch",
//     imageSrc: "/hero/smartphones.png",
//     price: 19943534,
//     discountPercent: 25,
//     link: "/product/23",
//   },
//   {
//     id: 3,
//     title: "Bluetooth Portable Speaker Smart Fitness Watch",
//     imageSrc: "/hero/smartphones-mobile.png",
//     price: 12945453,
//     discountPercent: 31,
//     link: "/product/23",
//   },
//   {
//     id: 4,
//     title: "Gaming Mechanical Keyboard",
//     imageSrc: "/hero/headphone.png",
//     price: 1594554,
//     discountPercent: 25,
//     link: "/product/23",
//   },
//   {
//     id: 5,
//     title: "4K Ultra HD Smart TV",
//     imageSrc: "/hero/headphone-mobile.png",
//     price: 154879000,
//     discountPercent: 25,
//     link: "/product/23",
//   },
//   {
//     id: 6,
//     title: "Professional Camera Lens",
//     imageSrc: "/hero/products.png",
//     price: 4994545,
//     discountPercent: 30,
//     link: "/product/23",
//   },
//   {
//     id: 7,
//     title: "4K Ultra HD Smart TV",
//     imageSrc: "/hero/headphone-mobile.png",
//     price: 154879000,
//     discountPercent: 25,
//     link: "/product/23",
//   },
//   {
//     id: 8,
//     title: "Professional Camera Lens",
//     imageSrc: "/hero/products.png",
//     price: 4994545,
//     discountPercent: 30,
//     link: "/product/23",
//   },
//   {
//     id: 9,
//     title: "4K Ultra HD Smart TV",
//     imageSrc: "/hero/headphone-mobile.png",
//     price: 154879000,
//     discountPercent: 25,
//     link: "/product/23",
//   },
//   {
//     id: 10,
//     title: "Professional Camera Lens",
//     imageSrc: "/hero/products.png",
//     price: 4994545,
//     discountPercent: 30,
//     link: "/product/23",
//   },
// ];

async function Offers() {
  const products = await getDiscountedProducts();

  return (
    <section>
      <SectionHeader
        link="products/all"
        buttonColor="danger"
        bgColor="bg-danger"
        textColor="text-white"
        title="پیشنهاد ویژه"
      />

      <ProductsSwiper products={products} uniqueId="offers" />
    </section>
  );
}

export default Offers;
