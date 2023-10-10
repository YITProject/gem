// @ts-ignore
let origin: string = import.meta.env.VITE_SERVER || "";
if (origin && origin.endsWith("/")) {
  origin = origin.slice(0, origin.length - 1);
}
export default origin;
