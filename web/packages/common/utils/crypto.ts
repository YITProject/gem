// @ts-nocheck
import crypto from "crypto";

export const sha1 = (data: string) => {
  return crypto.createHash("sha1").update(data).digest("hex");
};

export const sha256 = (data: string) => {
  return crypto.createHash("sha256").update(data).digest("hex");
};

export const sha512 = (data: string) => {
  return crypto.createHash("sha512").update(data).digest("hex");
};

export const md5 = (data: string) => {
  return crypto.createHash("md5").update(data).digest("hex");
};
