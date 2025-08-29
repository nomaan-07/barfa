import { useProductsStore } from "@/app/_store/productStore";
import Insurance from "../../Common/Insurance";

function ProductInsurance() {
  const insurancePrice = useProductsStore((state) => state.insurancePrice);
  const insuranceTitle = useProductsStore((state) => state.insurance.title);
  const hasInsurance = useProductsStore((state) => state.hasInsurance);
  const quantity = useProductsStore((state) => state.quantity);
  const toggleInsurance = useProductsStore((state) => state.toggleInsurance);

  return (
    <Insurance
      price={insurancePrice}
      title={insuranceTitle}
      onClick={toggleInsurance}
      quantity={quantity}
      hasInsurance={hasInsurance}
    />
  );
}

export default ProductInsurance;
