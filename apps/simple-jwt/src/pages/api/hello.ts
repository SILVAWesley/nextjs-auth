// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import jwt from "jsonwebtoken";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ text: string }>
) {
  try {
    if (req.method !== "GET") {
      res.status(405);
      return;
    }

    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).end();
    }

    try {
      const x = jwt.verify(token.split(" ")[1], "donababy");
    } catch (err) {
      return res.status(401).end();
    }

    res.status(200).json({ text: "Hello" });
  } catch (error) {
    res.status(405).end();
    return;
  }
}
