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
          <ul className="list-disc list-inside text-gray-700">
            <li>Ryan Adhitama Putra</li>
          </ul>
        </Box>
      </Box>
    </>
  );
};

About.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default About;
