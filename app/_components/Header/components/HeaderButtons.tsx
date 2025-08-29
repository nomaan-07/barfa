import { Divider } from "@heroui/divider";
import { Suspense } from "react";
import CartPanel from "./CartPanel";
import LoginButton from "./LoginButton";
import SearchPanel from "./SearchPanel";
import SearchPanelFallback from "./SearchPanel/components/SearchPanelFallback";

function HeaderButtons() {
  return (
    <>
      <Divider orientation="vertical" className="hidden h-2/3 xl:block" />
      <Suspense fallback={<SearchPanelFallback />}>
        <SearchPanel />
      </Suspense>
      <LoginButton />
      <CartPanel />
    </>
  );
}

export default HeaderButtons;
