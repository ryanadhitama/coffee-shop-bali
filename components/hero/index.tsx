import Box from "../box";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";

interface IHero {
  title: string;
  description?: string;
  content?: React.ReactNode;
  back?: string;
}

const Hero = ({ title, description, content, back }: IHero) => {
  return (
    <Box className="hero">
      <Box className="container">
        <Box className="hero__content">
          {back && (
            <Link href={back}>
              <Box className="hero__back">
                <MdArrowBack /> Back
              </Box>
            </Link>
          )}
          <h1 className="hero__title">{title}</h1>
          {description && <Box className="hero__desc">{description}</Box>}
          {content && content}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
