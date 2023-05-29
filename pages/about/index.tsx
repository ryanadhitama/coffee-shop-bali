import { Box, Hero, Layout } from "@/components";
import Head from "next/head";
import { ReactNode } from "react";

const About = () => {
  return (
    <>
      <Head>
        <title>About - Coffee Shop Bali</title>
      </Head>
      <Hero title="About" description="Listing coffee shop in Bali" />
      <Box className="container">
        <Box className="about__content">
          <strong className="mb-3 block">Contributor</strong>
          <ul className="mb-6 list-disc list-inside about__desc">
            <li>Ryan Adhitama Putra</li>
          </ul>
          <strong className="mb-3 block">How to Contribute</strong>
          <p className=" about__desc">Coming soon</p>
        </Box>
      </Box>
    </>
  );
};

About.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default About;
