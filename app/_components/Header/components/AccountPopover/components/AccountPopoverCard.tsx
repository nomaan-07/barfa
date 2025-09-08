import AccountMenu from "@/app/_components/Account/components/AccountMenu";
import { Card, CardBody } from "@heroui/card";
import AccountPopoverHeader from "./AccountPopoverHeader";

interface AccountPopoverCardProps {
  onClose: () => void;
}

function AccountPopoverCard({ onClose }: AccountPopoverCardProps) {
  return (
    <Card className="w-52" shadow="none">
      <AccountPopoverHeader />
      <CardBody>
        <AccountMenu size="md" onClosePopover={onClose} />
      </CardBody>
    </Card>
  );
}

export default AccountPopoverCard;
