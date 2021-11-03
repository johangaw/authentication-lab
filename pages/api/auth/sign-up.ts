// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { hashString } from "../../../services/crypto";

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // console.log(
  //   req.body.email,
  //   req.body.password,
  //   req.body.passwordAgain,
  //   hashString(req.body.password)
  // );

  // TODO: Create a new User and store it somewhere, e.g. with Use services/db/userService

  res.status(500).json({ message: "Not implemented" });
}
