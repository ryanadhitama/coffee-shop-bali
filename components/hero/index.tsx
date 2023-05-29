import Box from "../box";

interface IHero {
  title: string;
  description?: string;
  content?: React.ReactNode;
}

const Hero = ({ title, description, content }: IHero) => {
  return (
    <Box className="hero">
      <Box className="container">
        <Box className="hero__content">
          <h1 className="hero__title">{title}</h1>
          {description && <Box className="hero__desc">{description}</Box>}
          {content && content}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
