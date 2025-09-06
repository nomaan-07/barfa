import { useUserStore } from "@/app/_store/userStore";
import { Divider } from "@heroui/divider";
import { Suspense } from "react";
import AccountPopover from "./AccountPopover";
import CartPanel from "./CartPanel";
import LoginButton from "./LoginButton";
import SearchPanel from "./SearchPanel";
import SearchPanelFallback from "./SearchPanel/components/SearchPanelFallback";

function HeaderButtons() {
  const isUser = useUserStore((state) => state.isInitialized);

  return (
    <>
      <Divider orientation="vertical" className="hidden h-2/3 xl:block" />
      <Suspense fallback={<SearchPanelFallback />}>
        <SearchPanel />
      </Suspense>
      {isUser && <AccountPopover />}
      {!isUser && <LoginButton />}
      <CartPanel />
    </>
  );
}

export default HeaderButtons;
