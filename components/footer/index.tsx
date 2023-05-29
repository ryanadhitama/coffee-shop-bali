import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { BiSun, BiMoon } from "react-icons/bi";
import { useTheme } from "next-themes";
import Box from "../box";

const Footer = () => {
  const date = new Date();
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Box className="footer">
      <Box className="container">
        <Box className="footer__content">
          <Box>© {date.getFullYear()} Coffee Shop Bali</Box>

          <Box className="footer__content__right">
            <Box
              onClick={() => {
                setTheme(resolvedTheme === "dark" ? "light" : "dark");
              }}
            >
              {resolvedTheme === "dark" ? <BiSun /> : <BiMoon />}
            </Box>
            <Link
              target="_blank"
              href="https://github.com/ryanadhitama/coffee-shop-bali"
            >
              <AiOutlineGithub className="footer__github" />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
