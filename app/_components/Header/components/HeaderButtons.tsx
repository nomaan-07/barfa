import { Divider } from "@heroui/divider";
import { Suspense } from "react";
import AccountButton from "./AccountButton";
import CartPanel from "./CartPanel";
import LoginButton from "./LoginButton";
import SearchPanel from "./SearchPanel";
import SearchPanelFallback from "./SearchPanel/components/SearchPanelFallback";

interface HeaderButtonsProps {
  isUserLoggedIn: boolean;
}

function HeaderButtons({ isUserLoggedIn }: HeaderButtonsProps) {
  return (
    <>
      <Divider orientation="vertical" className="hidden h-2/3 xl:block" />
      <Suspense fallback={<SearchPanelFallback />}>
        <SearchPanel />
      </Suspense>
      {isUserLoggedIn ? <AccountButton /> : <LoginButton />}
      <CartPanel />
    </>
  );
}

export default HeaderButtons;
