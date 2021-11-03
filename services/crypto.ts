import { createHash } from "crypto";

export const hashString = (str: string): string =>
  createHash("sha256").update(str).digest("hex").toString();
