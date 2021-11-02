// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { userRepository } from "../../services/db";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(await userRepository.getAll());
  console.log(
    await userRepository.create({
      email: "johan.gustavsson@valtech.com",
      password: "1234",
    })
  );
  console.log(await userRepository.getAll());

  res.status(200).json({ name: "John Doe" });
}
