import { Card } from "@heroui/card";
import QuantityText from "../../QuantityText";
import ProductCardImage from "./ProductCardImage";
import ProductCardTitle from "./ProductCardTitle";

interface ProductFinishedCardProps {
  id: number;
  title: string;
  imageSrc: string;
}

function ProductFinishedCard({
  id,
  imageSrc,
  title,
}: ProductFinishedCardProps) {
  return (
    <Card shadow="sm" className="relative hidden p-2 grayscale sm:flex">
      <ProductCardImage src={imageSrc} alt={title} id={id} />
      <div className="space-y-4">
        <ProductCardTitle id={id} title={title} />
        <QuantityText variant="card" quantity={0} />
      </div>
    </Card>
  );
}

export default ProductFinishedCard;
