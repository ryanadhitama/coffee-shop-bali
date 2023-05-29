import { Box, Hero, Layout } from "@/components";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import { ReactNode } from "react";
interface StaticProps {
  params: {
    slug: string;
  };
}

function Place({ frontmatter, content }: any) {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Hero title={frontmatter.title} description={frontmatter.location} />
      <Box className="place">
        <Box className="container">
          <Box className="place__content">
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
    revalidate: 10,
    props: {
      frontmatter,
      content,
    },
    notFound: false,
  };
}
