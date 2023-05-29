import { Hero, Layout } from "@/components";
import Head from "next/head";
import { ReactNode } from "react";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 Not Found - Coffee Shop Bali</title>
      </Head>
      <Hero title="404 Not Found" description="Listing coffee shop in Bali" />
    </>
  );
};

NotFound.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default NotFound;