// API code for calculating moon phase and ante/retrograde motion of planets 
// I think I'm way ahead of myself here, I should implement this client-side via components first


import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};




export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "Henry Clay" });
}
