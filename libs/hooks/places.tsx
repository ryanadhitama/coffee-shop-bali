import matter from "gray-matter";
import fs from "fs";

export const usePlaces = () => {
  const placeFiles = fs.readdirSync("data/places");
  const data = placeFiles.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`data/places/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return data;
};