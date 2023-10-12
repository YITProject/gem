import type { Metadata } from "next";
import Client from "./_client";

export const metadata: Metadata = {
  title: "Login",
};
export default () => {
  return <Client />;
};
