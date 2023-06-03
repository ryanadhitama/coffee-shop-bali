// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import matter from "gray-matter";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const jsonDirectory = path.join(process.cwd(), "data/places");
    const placeFiles = fs.readdirSync(jsonDirectory);
    let response;
    const data = placeFiles.map((fileName) => {
      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(`data/places/${fileName}`, "utf-8");
      const { data: frontmatter } = matter(readFile);
      return {
        slug,
        ...frontmatter,
      };
    });

    response = data;

    if (req) {
      let name = req.query.name;
      let loc = req.query.location;
      if (loc) {
        response = response?.filter(function (el) {
          return el.location.toLowerCase() == loc.toLowerCase();
        });
      }
      if (name) {
        response = response?.filter(function (el) {
          return el.title.toLowerCase().includes(name.toLowerCase());
        });
      }
    }

    res.status(200).json({ data: response });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
