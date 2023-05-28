import { Box, Hero, Layout } from "@/components";
import Head from "next/head";
import { ReactNode } from "react";

const Home = () => {
  return (
    <>
      <Head>
        <title>Coffee Shop Bali</title>
      </Head>
      <Hero title="Home" description="Website under maintenance" />
      <Box className="container">Data</Box>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
