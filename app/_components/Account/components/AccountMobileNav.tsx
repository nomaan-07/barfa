"use client";

import { ACCOUNT_ITEMS } from "@/app/_data/accountItems";
import { usePathname } from "next/navigation";
import AccountMobileNavItem from "./AccountMobileNavItem";
import MobileLogoutButton from "./MobileLogoutButton";
import AccountMobileNavSkeleton from "./skeleton/AccountMobileNavSkeleton";

function AccountMobileNav() {
  const pathname = usePathname();

  if (!pathname) return <AccountMobileNavSkeleton />;

  return (
    <div className="border-t-default-200 fixed right-0 bottom-0 left-0 z-50 flex justify-between border-t bg-white p-2 lg:hidden">
      {ACCOUNT_ITEMS.map(({ href, title, Icon }) => (
        <AccountMobileNavItem
          key={href}
          href={href}
          icon={<Icon size={16} />}
          title={title}
          isActive={href === pathname}
        />
      ))}

      <MobileLogoutButton />
    </div>
  );
}

export default AccountMobileNav;
