import { getUserFromCookie } from "@/app/_lib/actions";
import HeaderClient from "./HeaderClient";

async function Header() {
  const user = await getUserFromCookie();

  const safeUser = user
    ? {
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        email: user.email,
      }
    : undefined;

  return <HeaderClient user={safeUser} />;
}

export default Header;
