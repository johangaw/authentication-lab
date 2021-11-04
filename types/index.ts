export enum SecrecyLevel {
  VerySecret,
  Secret,
  NotSoSecret,
}

export interface Secret {
  message: string;
  level: SecrecyLevel;
}

export interface User {
  id: string;
  email: string;
  password: string;
}

export interface Token {
  id: string;
  token: string;
  userId: string;
}
