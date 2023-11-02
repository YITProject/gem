import jwt from "jsonwebtoken";

const jwtkey = process.env.JWTKEY!;
export const defaultSignOption: jwt.SignOptions = {
  expiresIn: "24h",
  algorithm: "HS512",
};
export function sign(
  payload: string | Buffer | Record<string, unknown>,
  options?: jwt.SignOptions,
): string {
  if (typeof payload === "object" && "password" in payload) {
    delete payload.password;
  }
  return jwt.sign(payload, jwtkey, options || defaultSignOption);
}

export function parse(token: string): string | jwt.JwtPayload | null {
  return jwt.verify(token, jwtkey, defaultSignOption);
}
export const verify: typeof parse = parse;

export function decode(raw: string): string | jwt.JwtPayload | null {
  return jwt.decode(raw);
}

export default {
  sign,
  verify,
  parse,
  decode,
};
