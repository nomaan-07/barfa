import { Card, CardBody } from "@heroui/card";

interface AccountEmptyProductsProps {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  header?: React.ReactNode;
}

function AccountEmptyProducts({
  title,
  Icon,
  header,
}: AccountEmptyProductsProps) {
  return (
    <Card>
      {header}
      <CardBody>
        <div className="flex flex-col items-center justify-center gap-3 py-6 text-center sm:py-12">
          <Icon className="text-danger size-10" />
          <h3 className="font-medium sm:text-xl">{title}</h3>
        </div>
      </CardBody>
    </Card>
  );
}

export default AccountEmptyProducts;
