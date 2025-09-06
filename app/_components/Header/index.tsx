import { getUserFromCookie } from "@/app/_lib/actions";
import HeaderClient from "./HeaderClient";

async function Header() {
  const user = await getUserFromCookie();

  return <HeaderClient user={user} />;
}

export default Header;
