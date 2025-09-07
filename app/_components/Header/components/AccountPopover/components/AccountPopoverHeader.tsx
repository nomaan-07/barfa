import { useUserStore } from "@/app/_store/userStore";
import { CardHeader } from "@heroui/card";
import { useShallow } from "zustand/shallow";

function AccountPopoverHeader() {
  const { firstName, lastName, email } = useUserStore(
    useShallow((state) => ({
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
    })),
  );
  return (
    <CardHeader className="border-b-default-200 flex-col items-start border-b">
      <span className="truncate text-lg font-semibold">
        {firstName} {lastName}
      </span>
      <span
        className="text-default-400 w-full truncate text-sm"
        style={{ direction: "ltr" }}
      >
        {email}
      </span>
    </CardHeader>
  );
}

export default AccountPopoverHeader;
