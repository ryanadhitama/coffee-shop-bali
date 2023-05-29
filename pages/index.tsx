import Head from "next/head";
import { ReactNode } from "react";
import { Box, Hero, Layout, PlaceCard } from "@/components";
import { usePlaces } from "@/libs/hooks/places";

function Home() {
  const places = usePlaces();
  return (
    <>
      <Head>
        <title>Coffee Shop Bali</title>
      </Head>
      <Hero
        title="Home"
        description="Listing coffee shop in Bali"
        content={
          <Box className="home__search">
            <input
              className="form-control"
              placeholder="Type keyword"
              type="text"
            ></input>
            <select className="form-control">
              <option hidden>All</option>
              <option value="">Denpasar</option>
            </select>
            <button>Search</button>
          </Box>
        }
      />
      <Box className="container">
        <Box className="home__content">
          <Box className="home__place-grid">
            {places?.data?.map((place: any) => (
              <PlaceCard data={place} key={place.slug} />
            ))}
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
