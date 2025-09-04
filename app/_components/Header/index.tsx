import HeaderClient from "./HeaderClient";

async function Header() {
  // FIXME
  const isUserLoggedIn = false;

  return <HeaderClient isUserLoggedIn={isUserLoggedIn} />;
}

export default Header;
