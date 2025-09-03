import { GetUserFromCookie } from "@/app/_lib/actions";
import HeaderClient from "./HeaderClient";

async function Header() {
  const isUserLoggedIn = await GetUserFromCookie();

  return <HeaderClient isUserLoggedIn={isUserLoggedIn} />;
}

export default Header;
