import { Box, Hero, Layout, Meta } from "@/components";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import { AiOutlineInstagram } from "react-icons/ai";

function Place({ frontmatter, content }: any) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} - Coffee Shop Bali</title>
        <Meta
          title={frontmatter.title}
          description={frontmatter.location}
          image={"https://coffee-shop-bali.vercel.app/" + frontmatter.image}
        />
      </Head>
      <Hero
        title={frontmatter.title}
        description={frontmatter.location}
        back="/"
      />
      <Box className="place">
        <Box className="container">
          <Box className="place__content">
            <h2 className="subtitle mb-4">Social Media</h2>
            <Box className="place__social mb-4">
              <Link href={frontmatter.instagram} target="_blank">
                <AiOutlineInstagram />
              </Link>
            </Box>
            <h2 className="subtitle mb-4">Location</h2>
            <iframe
              className="place__map"
              src={frontmatter.map}
              width="100%"
              height="450"
            ></iframe>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Place;

Place.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export async function getStaticPaths() {
  const placeFiles = fs.readdirSync("data/places");
  const paths = placeFiles.map((fileName) => {
    const slug = fileName.replace(".md", "");
    return `/p/${slug}`;
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const path = `data/places/${context.params.slug}.md`;
  const isExists = await fs.existsSync(path);
  if (!isExists) {
    return {
      redirect: {
        destination: "/not-found",
      },
    };
  }
  const fileName = await fs.readFileSync(path, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    revalidate: false,
    props: {
      frontmatter,
      content,
    },
    notFound: false,
  };
}
