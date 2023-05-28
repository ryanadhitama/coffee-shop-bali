import Image from "next/image";
import Box from "../box";

const PlaceCard = ({ data }: any) => {
  return (
    <Box className="place-card">
      <Image
        src={`/${data?.frontmatter?.image}`}
        alt={data?.frontmatter?.title}
        width={100}
        height={100}
        objectFit="cover"
      />
      <Box>
        <Box className="place-card__title">{data?.frontmatter?.title}</Box>
        <Box className="place-card__loc">{data?.frontmatter?.location}</Box>
      </Box>
    </Box>
  );
};

export default PlaceCard;
