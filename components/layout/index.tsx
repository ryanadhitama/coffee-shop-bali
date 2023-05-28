import Box from "../box";
import Header from "../header";
import Footer from "../footer";

interface ILayout {
  children?: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <Box className="site">{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
