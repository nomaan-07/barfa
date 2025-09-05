import { Card, CardBody } from "@heroui/card";
import { Listbox, ListboxItem } from "@heroui/listbox";
import {
  LucideHeart,
  LucideMapPin,
  LucideShoppingBag,
  LucideUserCog2,
} from "lucide-react";
import Link from "next/link";
import AccountPopoverHeader from "./AccountPopoverHeader";
import AccountPopoverLogout from "./AccountPopoverLogout";

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

interface AccountPopoverCardProps {
  user: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
  };
  onClose: () => void;
}
function AccountPopoverCard({ user, onClose }: AccountPopoverCardProps) {
  return (
    <Card className="w-52" shadow="none">
      <AccountPopoverHeader user={user} />
      <CardBody>
        <Listbox
          className="text-right"
          itemClasses={{
            base: "rounded-lg gap-3 h-12 ",
          }}
          aria-label="منوی حساب کاربری"
        >
          {items.map((item) => (
            <ListboxItem
              key={item.id}
              as={Link}
              href={item.href}
              startContent={<item.Icon size={20} />}
              color="primary"
              variant="flat"
              onClick={onClose}
            >
              {item.title}
            </ListboxItem>
          ))}
        </Listbox>

        <AccountPopoverLogout onClosePopover={onClose} />
      </CardBody>
    </Card>
  );
}

export default AccountPopoverCard;
