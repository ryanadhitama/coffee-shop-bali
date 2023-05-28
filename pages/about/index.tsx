import { Box, Hero, Layout } from "@/components";
import Head from "next/head";
import { ReactNode } from "react";

const About = () => {
  return (
    <>
      <Head>
        <title>About - Coffee Shop Bali</title>
      </Head>
      <Hero title="About" description="Website under maintenance" />
      <Box className="container">Data</Box>
    </>
  );
};

About.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default About;
