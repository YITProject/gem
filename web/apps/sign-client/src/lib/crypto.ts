import _sha1 from "crypto-js/sha1";

export const sha1 = (src: string) => crypto(_sha1, src);
interface CryptoFunc {
  toString(): string;
}
export function crypto<T extends CryptoFunc>(
  fn: (arg: any, args?: any[]) => T,
  src: string | any,
  ...args: any[]
): string {
  return fn(src, args).toString();
}
