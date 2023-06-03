// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const jsonDirectory = path.join(process.cwd(), 'data/places');
    const placeFiles = fs.readdirSync(jsonDirectory);
    // const placeDir = fs.readdirSync("_next/data");
    // const placeFile = fs.readFileSync(`_next/data/${placeDir[0]}/index.json`, "utf-8");
    // let places = JSON.parse(placeFile);
    // places = places?.pageProps?.places;

    res.status(200).json({ data: placeFiles });
  } catch (error: any) {
    res.status(400).json({ message: error.message})
  }
}
