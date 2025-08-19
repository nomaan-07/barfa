import { Divider } from "@heroui/divider";
import CartButton from "./CartButton";
import LoginButton from "./LoginButton";
import SearchPanel from "./SearchPanel";

function HeaderButtons() {
  return (
    <>
      <Divider orientation="vertical" className="hidden h-2/3 xl:block" />
      <SearchPanel />
      <LoginButton />
      <CartButton />
    </>
  );
}

export default HeaderButtons;
