// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SecrecyLevel, Secret } from "../../types";

const secrets: Secret[] = [
  { message: "Meaning of life is 42", level: SecrecyLevel.Secret },
  { message: "The wifi password is ****", level: SecrecyLevel.VerySecret },
  { message: "CIA killed Olof Palme", level: SecrecyLevel.NotSoSecret },
  {
    message: "CIA was behind the 9/11 attack",
    level: SecrecyLevel.NotSoSecret,
  },
  { message: "CIA killed Kennedy", level: SecrecyLevel.Secret },
  {
    message: "CIA, ... is behind everything...",
    level: SecrecyLevel.VerySecret,
  },
  {
    message: "CIA staged the moon landing... Perhaps not, BUT IT WAS FAKE!!!",
    level: SecrecyLevel.NotSoSecret,
  },
  {
    message: "The first person convicted of speeding was going eight mph",
    level: SecrecyLevel.NotSoSecret,
  },
  {
    message: "The world's smallest reptile was first reported in 2021",
    level: SecrecyLevel.NotSoSecret,
  },
  {
    message: "The heads on Easter Island have bodies",
    level: SecrecyLevel.Secret,
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Secret[]>
) {
  res.status(200).json(secrets);
}
