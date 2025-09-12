"use client";

import { useUserStore } from "@/app/_store/userStore";
import { Card, CardBody } from "@heroui/card";
import AccountHeaderSkeleton from "./skeleton/AccountHeaderSkeleton";

function AccountHeader() {
  const firstName = useUserStore((state) => state.firstName);
  const lastName = useUserStore((state) => state.lastName);
  const email = useUserStore((state) => state.email);
  const phone = useUserStore((state) => state.phone);
  const isInitialized = useUserStore((state) => state.isInitialized);

  if (!isInitialized) return <AccountHeaderSkeleton />;

  return (
    <Card>
      <CardBody className="flex-row flex-wrap justify-between">
        <h2 className="gap-2 text-right text-lg font-bold break-all sm:text-2xl">
          {firstName} {lastName}
        </h2>
        <div className="flex w-full flex-col items-end overflow-hidden text-xs sm:w-fit sm:text-base">
          <span>{phone}</span>
          <span className="break-all">{email}</span>
        </div>
      </CardBody>
    </Card>
  );
}

export default AccountHeader;
