import { logoutUser } from "@/app/_lib/actions";
import { Card, CardBody } from "@heroui/card";
import { Listbox, ListboxItem } from "@heroui/listbox";
import {
  LucideHeart,
  LucideLogOut,
  LucideMapPin,
  LucideShoppingBag,
  LucideUserCog2,
} from "lucide-react";
import Link from "next/link";
import AccountPopoverHeader from "./AccountPopoverHeader";

const items = [
  {
    id: 1,
    title: "حساب کاربری",
    href: "/account",
    Icon: LucideUserCog2,
  },
  {
    id: 2,
    title: "سفارش‌ها",
    href: "/account/orders",
    Icon: LucideShoppingBag,
  },
  {
    id: 3,
    title: "مورد علاقه‌ها",
    href: "/",
    Icon: LucideHeart,
  },
  {
    id: 4,
    title: "آدرس‌ها",
    href: "/",
    Icon: LucideMapPin,
  },
];

function AccountPopoverCard({
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
    <Card className="w-52" shadow="none">
      <AccountPopoverHeader user={user} />
      <CardBody>
        <Listbox
          itemClasses={{
            base: "rounded-lg gap-3 h-12 text-right",
          }}
          aria-label="منوی حساب کاربری"
        >
          <>
            {items.map((item) => (
              <ListboxItem
                key={item.id}
                as={Link}
                href={item.href}
                startContent={<item.Icon size={20} />}
                color="primary"
                variant="flat"
              >
                {item.title}
              </ListboxItem>
            ))}
            {/* TODO: Add confirm modal */}
            <ListboxItem
              key="logout"
              onClick={logoutUser}
              startContent={<LucideLogOut size={20} />}
              className="text-right"
              color="danger"
              variant="flat"
            >
              خروج از حساب کاربری
            </ListboxItem>
          </>
        </Listbox>
      </CardBody>
    </Card>
  );
}

export default AccountPopoverCard;
