import { getUserFromCookie } from "@/app/_lib/actions";
import HeaderClient from "./HeaderClient";

async function Header() {
  // TODO: Add zustand store
  const user = await getUserFromCookie();

  return <HeaderClient user={user} />;
}

export default Header;
