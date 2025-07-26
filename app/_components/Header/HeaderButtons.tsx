import { Divider } from "@heroui/react";
import CartButton from "./CartButton";
import LoginButton from "./LoginButton";
import SearchButton from "./SearchButton";

function HeaderButtons() {
  return (
    <>
      <Divider orientation="vertical" className="hidden h-2/3 xl:block" />
      <SearchButton />
      <LoginButton />
      <CartButton />
    </>
  );
}

export default HeaderButtons;
