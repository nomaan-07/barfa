"use client";

import { useUserStore } from "@/app/_store/userStore";
import { Card, CardBody } from "@heroui/card";
import { useShallow } from "zustand/shallow";

function AccountHeader() {
  const { firstName, lastName, email, phone, isInitialized } = useUserStore(
    useShallow((state) => ({
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      phone: state.phone,
      isInitialized: state.isInitialized,
    })),
  );

  // FIXME: Add skeleton later
  if (!isInitialized) return <p>Loading...</p>;

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
