import { NextApiRequest, NextApiResponse } from "next";
import { IUser, Users } from "../../data/users";

import jwt from "jsonwebtoken";

export default function login(
  req: NextApiRequest,
  res: NextApiResponse<{ user: IUser; token: string }>
) {
  try {
    if (req.method !== "POST") {
      res.status(405).end();
      return;
    }

    const body = JSON.parse(JSON.stringify(req.body));

    const user = Users.find(
      (user) => user.email === body.username && user.password === body.password
    );

    if (!user) {
      res.status(404).end();
      return;
    }

    const token = jwt.sign({ id: user.id }, "donababy", {
      algorithm: "HS256",
    });

    res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(404).end();
    return;
  }
}
