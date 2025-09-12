import { useUserStore } from "@/app/_store/userStore";
import { CardHeader } from "@heroui/card";

function AccountPopoverHeader() {
  const firstName = useUserStore((state) => state.firstName);
  const lastName = useUserStore((state) => state.lastName);
  const email = useUserStore((state) => state.email);

  return (
    <CardHeader className="border-b-default-200 flex-col items-start border-b">
      <span className="truncate text-lg font-semibold">
        {firstName} {lastName}
      </span>
      <span dir="ltr" className="text-default-400 w-full truncate text-sm">
        {email}
      </span>
    </CardHeader>
  );
}

export default AccountPopoverHeader;
