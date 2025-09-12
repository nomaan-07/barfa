import { useProductStore } from "@/app/_store/productStore";
import Insurance from "../../Common/Insurance";

function ProductInsurance() {
  const insurancePrice = useProductStore((state) => state.insurancePrice);
  const insuranceTitle = useProductStore((state) => state.insurance.title);
  const hasInsurance = useProductStore((state) => state.hasInsurance);
  const quantity = useProductStore((state) => state.quantity);
  const toggleInsurance = useProductStore((state) => state.toggleInsurance);

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
