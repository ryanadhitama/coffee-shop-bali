import Head from "next/head";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { TbMoodSad } from "react-icons/tb";
import {
  Box,
  Hero,
  Layout,
  PlaceCard,
  SearchPlace,
  Skeleton,
} from "@/components";
import { usePlaces } from "@/libs/hooks/places";

function Home() {
  const [search, setSearch] = useState({
    name: "",
    location: "",
  });
  const { data: places, loading: placesLoading } = usePlaces({
    name: search.name,
    location: search.location,
  });

  return (
    <>
      <Head>
        <title>Coffee Shop Bali</title>
      </Head>
      <Hero
        title="Home"
        description="Listing coffee shop in Bali"
        content={
          <SearchPlace
            setSearch={(name, location) =>
              setSearch({
                name,
                location,
              })
            }
          />
        }
      />
      <Box className="container">
        <Box className="home__content">
          <Box className="home__place-grid">
            {placesLoading &&
              Array(4)
                .fill(1)
                .map((_, idx) => (
                  <Skeleton key={idx} className="home__place-skeleton" />
                ))}
            {places?.map((place: any) => (
              <PlaceCard data={place} key={place.slug} />
            ))}
            {!placesLoading && places?.length < 1 && (
              <Box className="home__place-null">
                <TbMoodSad /> Here is empty. Try to change search request
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
