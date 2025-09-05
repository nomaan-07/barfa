import { Divider } from "@heroui/divider";
import { Suspense } from "react";
import AccountPopover from "./AccountPopover";
import CartPanel from "./CartPanel";
import LoginButton from "./LoginButton";
import SearchPanel from "./SearchPanel";
import SearchPanelFallback from "./SearchPanel/components/SearchPanelFallback";

interface HeaderButtonsProps {
  user: {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
  } | null;
}

function HeaderButtons({ user }: HeaderButtonsProps) {
  return (
    <>
      <Divider orientation="vertical" className="hidden h-2/3 xl:block" />
      <Suspense fallback={<SearchPanelFallback />}>
        <SearchPanel />
      </Suspense>
      {user ? <AccountPopover user={user} /> : <LoginButton />}
      <CartPanel />
    </>
  );
}

export default HeaderButtons;
