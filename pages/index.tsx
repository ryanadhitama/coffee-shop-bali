import Head from "next/head";
import { ReactNode } from "react";
import matter from "gray-matter";
import fs from "fs";
import { Box, Hero, Layout, PlaceCard } from "@/components";

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
  const placeFiles = fs.readdirSync("data/places");
  const places = placeFiles.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`data/places/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      places,
    },
  };
}
