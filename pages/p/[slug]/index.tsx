import { ReactNode } from "react";
import { Box, Hero, Layout } from "@/components";
import Head from "next/head";
import { GetStaticPaths } from "next";
interface StaticProps {
  params: {
    slug: string;
  };
}

function Place() {
  return (
    <>
      <Head>
        <title>Tan-Panama</title>
      </Head>
      <Hero title="Tan-Panama" description="Denpasar" />
    </>
  );
}
export default Place;

Place.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};
