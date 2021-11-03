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
  //   hashString(req.body.password)
  // );
  res.status(200).json({ message: "Everyone is allowed ;)" });
}
