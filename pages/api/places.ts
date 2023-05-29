// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import matter from "gray-matter";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const placeFiles = fs.readdirSync("data/places");
  const data = placeFiles.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`data/places/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      ...frontmatter,
    };
  });

  res.status(200).json({ data: data });
}
