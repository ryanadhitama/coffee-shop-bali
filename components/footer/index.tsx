import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import Box from "../box";

const Footer = () => {
  const date = new Date();
  return (
    <Box className="footer">
      <Box className="container">
        <Box className="footer__content">
          <Box>© {date.getFullYear()} Coffee Shop Bali</Box>
          <Box>
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
