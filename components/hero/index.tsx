import Box from "../box";

interface IHero {
  title: string;
  description?: string;
}

const Hero = ({ title, description }: IHero) => {
  return (
    <Box className="hero">
      <Box className="container">
        <Box className="hero__content">
          <h1 className="hero__title">{title}</h1>
          {description && <Box className="hero__desc">{description}</Box>}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
