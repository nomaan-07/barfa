import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import Link from "next/link";
import QuantityText from "../../QuantityText";

interface MobileFinishedCardProps {
  id: number;
  title: string;
  imageSrc: string;
}

function MobileFinishedCard({ id, title, imageSrc }: MobileFinishedCardProps) {
  return (
    <Card
      shadow="sm"
      className="grayscale sm:hidden"
      as={Link}
      href={`/product/${id}`}
    >
      <CardBody className="flex-row gap-2 text-right">
        <div className="shrink-0">
          <Image src={imageSrc} alt={title} height={86} width={86} />
        </div>
        <div className="space-y-2">
          <QuantityText quantity={0} variant="card" />
          <p className="line-clamp-2 min-h-10 text-xs/relaxed">{title}</p>
        </div>
      </CardBody>
    </Card>
  );
}

export default MobileFinishedCard;
