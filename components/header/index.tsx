import Link from "next/link";
import Box from "../box";

const Header = () => {
  return (
    <Box className="header">
      <Box className="container">
        <Box className="header__content">
          <Box className="header-left">
            <Box className="header__title">
              <Link href="/">CoffeeShopBali</Link>
            </Box>
          </Box>
          <Box className="header-right">
            <ul className="header__menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
