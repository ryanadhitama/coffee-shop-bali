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
            src={`/${data?.image}`}
            alt={data?.title}
            fill
          />
        </Box>
        <Box>
          <Box className="place-card__title">{data?.title}</Box>
          <Box className="place-card__loc">
            <MdLocationOn /> {data?.location}
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default PlaceCard;
