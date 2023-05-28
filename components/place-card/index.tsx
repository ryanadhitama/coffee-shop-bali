import Image from "next/image";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import Box from "../box";

const PlaceCard = ({ data }: any) => {
  return (
    <Link href={`/p/${data.slug}`}>
      <Box className="place-card">
        <Box className="place-card__image">
          <Image
            src={`/${data?.frontmatter?.image}`}
            alt={data?.frontmatter?.title}
            fill
          />
        </Box>
        <Box>
          <Box className="place-card__title">{data?.frontmatter?.title}</Box>
          <Box className="place-card__loc">
            <MdLocationOn /> {data?.frontmatter?.location}
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default PlaceCard;
