import { CardHeader } from "@heroui/card";

function AccountPopoverHeader({
  user,
}: {
  user: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
  };
}) {
  return (
    <CardHeader className="border-b-default-200 flex-col items-start border-b">
      <span className="truncate text-lg font-semibold">
        {user.first_name} {user.last_name}
      </span>
      <span className="text-default-400 w-full truncate text-left text-sm">
        {user.email}
      </span>
    </CardHeader>
  );
}

export default AccountPopoverHeader;
