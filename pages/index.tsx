import Head from "next/head";
import { ReactNode } from "react";
import { Box, Hero, Layout, PlaceCard } from "@/components";
import { usePlaces } from "@/libs/hooks/places";

function Home({ places }: any) {
  return (
    <>
      <Head>
        <title>Coffee Shop Bali</title>
      </Head>
      <Hero title="Home" description="Listing coffee shop in Bali" />
      <Box className="container">
        <Box className="home__content">
          <Box className="home__place-grid">
            {places?.map((place: any) => (
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

export async function getStaticProps() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const places = usePlaces();
  return {
    props: {
      places,
    },
  };
}
