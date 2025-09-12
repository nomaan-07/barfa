import { getUserFromCookie } from "@/app/_lib/actions";
import HeaderClient from "./HeaderClient";

async function Header() {
  const user = await getUserFromCookie();

  const safeUser = user
    ? {
        firstName: user.first_name,
        lastName: user.last_name,
        phone: user.phone,
        email: user.email,
        favorites: user.favorite_products,
      }
    : undefined;

  return <HeaderClient user={safeUser} />;
}

export default Header;
