import { CardHeader } from "@heroui/card";

interface AccountSectionHeaderProps {
  children: React.ReactNode;
}

function AccountSectionHeader({ children }: AccountSectionHeaderProps) {
  return (
    <CardHeader>
      <h3 className="font-black sm:text-lg">{children}</h3>
    </CardHeader>
  );
}

export default AccountSectionHeader;
