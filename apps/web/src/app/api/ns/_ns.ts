import type { User } from "@prisma/client";
import db from "../../../db";

export default async function FindNS(namespace: string): Promise<User | null> {
  return db.user.findFirst({
    where: {
      namespace,
    },
  });
}
