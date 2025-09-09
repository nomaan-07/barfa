import { getUserFromCookie } from "@/app/_lib/actions";
import { Card, CardBody } from "@heroui/card";

async function AccountHeader() {
  const user = await getUserFromCookie();

  if (!user) return null;

  return (
    <Card>
      <CardBody className="flex-row flex-wrap justify-between">
        <h2 className="gap-2 text-right text-lg font-bold break-all sm:text-2xl">
          {user.first_name} {user.last_name}
        </h2>
        <div className="flex w-full flex-col items-end overflow-hidden text-xs sm:w-fit sm:text-base">
          <span>{user.phone}</span>
          <span className="break-all">{user.email}</span>
        </div>
      </CardBody>
    </Card>
  );
}

export default AccountHeader;
